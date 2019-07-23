import * as https from "https";
import * as fs from "fs";
import { URL } from "url";

import { CommandModule, Argv } from "yargs";
import { default as axios } from "axios";

import * as pkg from "../package.json";

import * as docker from "./docker";
import { logger, writeToStdout } from "./logger";

const USER_AGENT = `deepsecurity/smartcheck-scan-action v${pkg.version}`;

export interface ScanCommandArgs {
  "smartcheck-host": string;
  "smartcheck-user": string;
  "smartcheck-password": string;
  "results-file"?: string;
  "image-name": string;
  "image-pull-auth"?: SmartCheck.Credentials;
  "findings-threshold": FindingsThreshold;
  "insecure-skip-tls-verify"?: boolean;
  "insecure-skip-registry-tls-verify"?: boolean;
  "preregistry-scan": boolean;
  "preregistry-host"?: string;
  "preregistry-user"?: string;
  "preregistry-password"?: string;
}

interface SeverityCounts {
  defcon1?: number;
  critical?: number;
  high?: number;
  medium?: number;
  low?: number;
  negligible?: number;
  unknown?: number;
}

const SEVERITIES: (keyof SeverityCounts)[] = [
  "defcon1",
  "critical",
  "high",
  "medium",
  "low",
  "negligible",
  "unknown",
];

interface FindingsThreshold {
  malware?: number;
  contents?: SeverityCounts;
  vulnerabilities?: SeverityCounts;
  checklists?: SeverityCounts;
}

const THRESHOLD_KEYS: (keyof FindingsThreshold)[] = [
  "malware",
  "contents",
  "vulnerabilities",
  "checklists",
];

function isObjectOnlyWithKeys(obj: any, validKeys: string[]): boolean {
  if (typeof obj !== "object") {
    return false;
  }
  let keys;
  try {
    keys = Object.keys(obj);
  } catch (err) {
    return false;
  }
  const invalidKeys = keys.filter(key => validKeys.indexOf(key) === -1);
  if (invalidKeys.length > 0) {
    return false;
  }
  return true;
}

function isFindingsThreshold(obj: any): obj is FindingsThreshold {
  return (
    isObjectOnlyWithKeys(obj, THRESHOLD_KEYS) &&
    // malware
    (obj.malware === undefined || typeof obj.malware === "number") &&
    // contents
    (obj.contents === undefined ||
      (isObjectOnlyWithKeys(obj.contents, SEVERITIES) &&
        Object.keys(obj.contents).every(
          k => typeof obj.contents[k] === "number",
        ))) &&
    // vulnerabilities
    (obj.vulnerabilities === undefined ||
      (isObjectOnlyWithKeys(obj.vulnerabilities, SEVERITIES) &&
        Object.keys(obj.vulnerabilities).every(
          k => typeof obj.vulnerabilities[k] === "number",
        ))) &&
    // checklists
    (obj.checklists === undefined ||
      (isObjectOnlyWithKeys(obj.checklists, SEVERITIES) &&
        Object.keys(obj.checklists).every(
          k => typeof obj.checklists[k] === "number",
        )))
  );
}

function sleep(milliseconds: number): Promise<undefined> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

function scanIsRunning(scan: SmartCheck.Scan): boolean {
  return (
    !scan.status || scan.status === "in-progress" || scan.status === "pending"
  );
}

function parseDockerImageName(imageName: string) {
  const parseResult = docker.parseReference(imageName);
  const result: Partial<SmartCheck.Source> = {
    registry: parseResult.domain || "docker.io",
    repository: parseResult.path,
    tag: parseResult.tag,
    digest: parseResult.digest,
  };
  if (!result.tag && !result.digest) {
    result.tag = "latest";
  }
  return result;
}

function doFindingsExceedThreshold(
  { findings }: SmartCheck.Scan,
  threshold: FindingsThreshold,
) {
  const gt = (a = 0, b = Infinity) => a > b;
  let malwareOver: boolean = false;
  let vulnerabilitiesOver: boolean = false;
  let contentOver: boolean = false;
  let checklistOver: boolean = false;
  if (findings) {
    malwareOver = gt(findings.malware, threshold.malware);
    if (malwareOver) {
      logger.info(`Malware found: ${findings.malware}`);
    }
    if (
      findings.contents &&
      threshold.contents &&
      findings.contents.unresolved
    ) {
      // Typescript flow analysis does not cross function boundaries, so we
      // can't directly use findings.contents.unresolved without doing an extra
      // undefined check inside 'map' which would happen every iteration
      const contentsFindings = findings.contents.unresolved;
      const contentsThreshold = threshold.contents;
      contentOver = Object.keys(contentsThreshold)
        .map((severity: keyof SeverityCounts) =>
          gt(contentsFindings[severity], contentsThreshold[severity]),
        )
        .some(x => x);
      if (contentOver) {
        logger.info(
          "Content findings exceeded threshold %o",
          findings.contents.unresolved,
        );
      }
    }
    if (
      findings.vulnerabilities &&
      threshold.vulnerabilities &&
      findings.vulnerabilities.unresolved
    ) {
      const vulnerabilityFindings = findings.vulnerabilities.unresolved;
      const vulnerabilityThreshold = threshold.vulnerabilities;
      vulnerabilitiesOver = Object.keys(vulnerabilityThreshold)
        .map((severity: keyof SeverityCounts) =>
          gt(vulnerabilityFindings[severity], vulnerabilityThreshold[severity]),
        )
        .some(x => x);
      if (vulnerabilitiesOver) {
        logger.info(
          "Vulnerabilities exceeded threshold %o",
          findings.vulnerabilities.unresolved,
        );
      }
    }
    if (
      findings.checklists &&
      threshold.checklists &&
      findings.checklists.unresolved
    ) {
      const checklistFindings = findings.checklists.unresolved;
      const checklistThreshold = threshold.checklists;
      checklistOver = Object.keys(checklistThreshold)
        .map((severity: keyof SeverityCounts) =>
          gt(checklistFindings[severity], checklistThreshold[severity]),
        )
        .some(x => x);
      if (checklistOver) {
        logger.info(
          "Checklist findings exceeded threshold %o",
          findings.checklists.unresolved,
        );
      }
    }
  }
  return malwareOver || vulnerabilitiesOver || contentOver || checklistOver;
}

export function calculateSmartcheckBaseURL(smartcheckHost: string): URL {
  try {
    const smartcheckURL = new URL(smartcheckHost);
    // domain name with port number (ie. xyz:123) will not throw an error. It
    // will interpret 'xyz' as the protocol, and 123 as the pathname but the
    // hostname will be empty unless the host string includes '://'. So if the
    // hostname is not empty, we can return the result now.
    if (smartcheckURL.hostname) {
      return smartcheckURL;
    }
  } catch (error) {
    // let's try again with the scheme...
  }

  return new URL("https://" + smartcheckHost);
}

export const scanCommand: CommandModule<Argv, ScanCommandArgs> = {
  command: ["scan", "$0"],
  describe: "Start a scan and wait for it to finish.",
  builder: yargs => {
    return yargs
      .env("DSSC")
      .option("results-file", {
        describe:
          "The path to write the scan results to. If not provided, the scan results will be written to stdout.",
        type: "string",
      })
      .option("image-name", {
        describe: "The image to scan.",
        demandOption: true,
        type: "string",
      })
      .option("image-pull-auth", {
        describe:
          "A JSON object of credentials for authenticating with the registry to pull the image from.",
        coerce: opt => {
          if (typeof opt !== "string" || opt.length === 0) return opt;
          try {
            const credentials: SmartCheck.Credentials = JSON.parse(opt);
            return credentials;
          } catch (err) {
            throw new Error("Failed to read image-pull-auth: " + err);
          }
        },
      })
      .option("insecure-skip-registry-tls-verify", {
        describe:
          "If Deep Security Smart Check should ignore certificate errors from the image registry.",
        type: "boolean",
      })
      .option("smartcheck-host", {
        describe:
          "The hostname of the Deep Security Smart Check deployment. Example: smartcheck.example.com",
        demandOption: true,
        type: "string",
        coerce: (opt: string) => {
          if (opt.indexOf("/") !== -1) {
            throw new Error("Invalid hostname format.");
          }
          return opt;
        },
      })
      .option("insecure-skip-tls-verify", {
        describe:
          "If the client should ignore certificate errors when connecting to Deep Security Smart Check.",
        type: "boolean",
      })
      .option("smartcheck-user", {
        demandOption: true,
        description: "The userid for connecting to Deep Security Smart Check",
        type: "string",
      })
      .option("smartcheck-password", {
        demandOption: true,
        description: "The password for connecting to Deep Security Smart Check",
        type: "string",
      })
      .option("findings-threshold", {
        description:
          "A JSON object with counts as thresholds for findings. If levels are exceeded exit code will be non-zero. You can optionally pass a base64 encoded string prefixed with 'base64:'",
        coerce: (opt): FindingsThreshold => {
          if (typeof opt !== "string" || opt.length === 0) return opt;
          if (opt.startsWith("base64:")) {
            const base64Str = opt.substring("base64:".length);
            const buff = new Buffer(base64Str, "base64");
            opt = buff.toString("utf8");
          }
          let inputJSON: any;
          try {
            inputJSON = JSON.parse(opt);
          } catch (err) {
            throw new Error("Failed to read findings-threshold: " + err);
          }
          if (isFindingsThreshold(inputJSON)) {
            return inputJSON;
          } else {
            throw new Error("Unexpected format given for findings-threshold");
          }
        },
        default: {
          malware: 0,
          vulnerabilities: {
            defcon1: 0,
            critical: 0,
            high: 0,
          },
          contents: {
            defcon1: 0,
            critical: 0,
            high: 0,
          },
          checklists: {
            defcon1: 0,
            critical: 0,
            high: 0,
          },
        },
      })
      .option("preregistry-scan", {
        description:
          "If the image is not stored in a registry, specify `preregistry-scan=true` to push the image to a temporary registry for scanning.",
        type: "boolean",
        default: false,
      })
      .option("preregistry-host", {
        description:
          "The host to push the image to prior to scanning for pre-registry scanning. This defaults to the `smartcheck-host` on port 5000.",
        type: "string",
      })
      .option("preregistry-user", {
        description:
          "The user name for pushing the image for pre-registry scanning.",
        type: "string",
      })
      .option("preregistry-password", {
        description:
          "The user name for pushing the image for pre-registry scanning.",
        type: "string",
      })
      .check(function(argv, options) {
        switch (argv._.length) {
          case 0:
            return true;
          case 1:
            throw "Unknown argument: " + argv._.join(", ");
          default:
            throw "Unknown arguments: " + argv._.join(", ");
        }
      })
      .strict(true);
  },
  handler: async (args: ScanCommandArgs) => {
    // Keep track of the created image tag (if we create one) so we can clean it up later
    let taggedAs = null;

    // We can't call process.exit() until we've finished handling any `finally` blocks, so keep
    // track of the desired exit code here.
    let exitCode = 0;

    try {
      if (args["preregistry-scan"]) {
        if (!args["preregistry-host"]) {
          args["preregistry-host"] = `${
            calculateSmartcheckBaseURL(args["smartcheck-host"]).hostname
          }:5000`;
        }

        if (args["preregistry-user"] && args["preregistry-password"]) {
          await docker.login(
            args["preregistry-host"],
            args["preregistry-user"],
            args["preregistry-password"],
          );
        }

        const preregistryImageName = docker.rename(
          args["image-name"],
          args["preregistry-host"],
        );

        await docker.tag(args["image-name"], preregistryImageName);
        taggedAs = preregistryImageName;

        await docker.push(preregistryImageName);

        args["image-name"] = preregistryImageName;

        // TODO provide the Deep Security Smart Check certificate as the registry certificate
        args["insecure-skip-registry-tls-verify"] = true;

        args["image-pull-auth"] = {
          username: args["preregistry-user"],
          password: args["preregistry-password"],
        };
      }

      const smartcheckBaseURL = calculateSmartcheckBaseURL(
        args["smartcheck-host"],
      ).toString();

      const axiosInstance = axios.create({
        httpsAgent: new https.Agent({
          // ignore https self signed certs
          rejectUnauthorized: args["insecure-skip-tls-verify"] ? false : true,
        }),
        headers: {
          "X-Api-Version": "2018-05-01",
          "User-Agent": USER_AGENT,
        },
      });
      axiosInstance.interceptors.response.use(undefined, error => {
        logger.error(`Request failed: ${error.message}`);
        throw new Error(`Request failed: ${error.message}`);
      });

      // Login
      logger.info("Logging in...");
      const authBody: SmartCheck.CreateSession.Parameters.Request = {
        user: {
          userID: args["smartcheck-user"],
          password: args["smartcheck-password"],
        },
      };
      const authResponse = await axiosInstance.post(`/api/sessions`, authBody, {
        baseURL: smartcheckBaseURL,
      });
      if (authResponse.status < 200 || authResponse.status > 299) {
        throw new Error("Failed to log in to Deep Security Smart Check");
      }
      logger.info("Logged in");
      const session: SmartCheck.Session = authResponse.data;

      const apiHeaders = {
        Authorization: `Bearer ${session.token}`,
      };

      // create scan
      logger.info("Creating scan...");
      const createScanBody: SmartCheck.ScanRequest = {
        source: {
          type: "docker",
          ...parseDockerImageName(args["image-name"]),
        },
      };
      if (args["insecure-skip-registry-tls-verify"]) {
        createScanBody.source.insecureSkipVerify =
          args["insecure-skip-registry-tls-verify"];
      }
      if (args["image-pull-auth"]) {
        createScanBody.source.credentials = args["image-pull-auth"];
      }

      const createScanResponse = await axiosInstance.post(
        `/api/scans`,
        createScanBody,
        { headers: apiHeaders, baseURL: smartcheckBaseURL },
      );
      if (createScanResponse.status < 200 || createScanResponse.status > 299) {
        throw new Error("Failed to create scan");
      }

      logger.info("Scan started.");
      let scan: SmartCheck.Scan = createScanResponse.data;

      // poll until finished
      while (scanIsRunning(scan)) {
        await sleep(5000);
        logger.info("Checking scan status...");
        const getScanResponse = await axiosInstance.get(scan.href, {
          headers: apiHeaders,
          baseURL: smartcheckBaseURL,
        });
        if (getScanResponse.status < 200 || getScanResponse.status > 299) {
          throw new Error("Failed to get scan");
        }
        scan = getScanResponse.data;
      }

      logger.info(`scan finished with status: ${scan.status}`);

      if (!args["results-file"]) {
        await writeToStdout(JSON.stringify(scan, null, 4));
      } else {
        try {
          fs.writeFileSync(
            args["results-file"],
            JSON.stringify(scan, null, 4),
            {
              encoding: "utf8",
            },
          );
        } catch (error) {
          throw new Error(
            error.message
              ? "Could not write results file: " + error.message
              : "Could not write results file.",
          );
        }
      }

      // Check thresholds
      if (doFindingsExceedThreshold(scan, args["findings-threshold"])) {
        throw 2; // this is not an Error so will result in setting exitCode=2
      } else if (scan.status === "failed") {
        throw new Error(
          scan.details && scan.details.detail
            ? `Scan failed: ${scan.details.detail}`
            : "Scan failed.",
        );
      }
    } catch (e) {
      if (e instanceof Error) {
        logger.error(e.message);
        exitCode = 1;
      } else {
        exitCode = 2;
      }
    } finally {
      // If we created an image tag then delete it here to clean up
      if (taggedAs !== null) {
        await docker.deleteImageTag(taggedAs);
      }
    }

    // This is mostly redundant but improves the testability
    process.exit(exitCode);
    return;
  },
};
