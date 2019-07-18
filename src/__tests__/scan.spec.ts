// mocks must happen before importing modules that use those mocks
const mockAxios: jest.Mocked<AxiosStatic> = require("axios").default;

import * as yargs from "yargs";
import { scanCommand, calculateSmartcheckBaseURL } from "../scan";
import { AxiosStatic } from "axios";
import { logger } from "../logger";

const mockExit = jest.spyOn(process, "exit").mockImplementation();
global.setTimeout = jest.fn().mockImplementation(cb => cb());
jest.spyOn(logger, "info").mockImplementation();
const mockErrorLog = jest.spyOn(logger, "error").mockImplementation();

const originalHandler = scanCommand.handler;
scanCommand.handler = () => {};
// minimum required args
const defaultArgs = [
  "--image-name",
  "example.com/foo-image",
  "--smartcheck-host",
  "test-smartcheck.example.com",
  "--smartcheck-user",
  "test",
  "--smartcheck-password",
  "test",
];

describe("calculateSmartcheckBaseURL", () => {
  const testcases: {
    name: string;
    host: string;
    expected: string;
  }[] = [
    {
      name: "bare FQDN gets scheme added",
      host: "smartcheck.example.com",
      expected: "https://smartcheck.example.com/",
    },
    {
      name: "bare FQDN with port gets scheme added",
      host: "smartcheck.example.com:8443",
      expected: "https://smartcheck.example.com:8443/",
    },
    {
      name: "bare local name gets scheme added",
      host: "smartcheck",
      expected: "https://smartcheck/",
    },
    {
      name: "bare local name with port gets scheme added",
      host: "smartcheck:8443",
      expected: "https://smartcheck:8443/",
    },
    {
      name: "scheme gets respected",
      host: "http://smartcheck.example.com",
      expected: "http://smartcheck.example.com/",
    },
  ];

  testcases.forEach(testcase => {
    test(testcase.name, () => {
      const actual = calculateSmartcheckBaseURL(testcase.host).toString();
      expect(actual).toEqual(testcase.expected);
    });
  });
});

describe("scan command", () => {
  beforeEach(() => {
    yargs.reset();
    mockAxios.post.mockReset();
    mockAxios.get.mockReset();
    mockErrorLog.mockClear();
  });

  describe("input validation tests", () => {
    const dataSet: {
      parameters: { [x: string]: string };
      expected?: { [x: string]: any };
      shouldThrow: boolean;
    }[] = [
      {
        parameters: { "--image-pull-auth": "" },
        shouldThrow: false,
      },
      {
        parameters: { "--image-pull-auth": "{" },
        shouldThrow: true,
      },
      {
        parameters: { "--image-pull-auth": "{}" },
        expected: { "--image-pull-auth": {} },
        shouldThrow: false,
      },
      {
        parameters: { "--findings-threshold": "{" },
        shouldThrow: true,
      },
      {
        parameters: { "--findings-threshold": "{}" },
        expected: { "--findings-threshold": {} },
        shouldThrow: false,
      },
    ];
    dataSet.forEach(testData => {
      test(`should${
        testData.shouldThrow ? "" : " not"
      } throw for ${JSON.stringify(testData.parameters)}`, () => {
        let results: any;
        yargs.command(scanCommand).parse(
          Object.entries({
            "--image-name": "example.com/foo-image",
            "--smartcheck-host": "test-smartcheck.example.com",
            "--smartcheck-user": "test",
            "--smartcheck-password": "test",
            ...testData.parameters,
          }).reduce(
            (result: string[], entry: string[]) => result.concat(entry),
            [],
          ),
          {},
          (err, argv, output) => {
            // jest / ts-jest doesn't do well with assertions in callbacks
            results = { err, argv, output };
          },
        );
        if (testData.shouldThrow) {
          expect(results.err.message).toMatch(
            /Unexpected format|Failed to read/,
          );
        } else {
          expect(results.err).toBeNull();
          Object.entries(testData.parameters).forEach(([param, value]) => {
            if (testData.expected && testData.expected[param]) {
              expect(results.argv[param.replace(/^--/, "")]).toEqual(
                testData.expected[param],
              );
            } else {
              expect(results.argv[param.replace(/^--/, "")]).toEqual(value);
            }
          });
        }
      });
    });
  });

  describe("input validation", () => {
    const commonParameters: string[] = [
      "--smartcheck-host=test-smartcheck.example.com",
      "--smartcheck-user=test",
      "--smartcheck-password=test",
      "--image-name=example.com/foo-image",
    ];
    const dataSet: {
      name: string;
      parameters: string[];
      checker: (results: any) => void;
    }[] = [
      {
        name: "should error for invalid JSON in image-pull-auth",
        parameters: [...commonParameters, "--image-pull-auth", "abc"],
        checker: function(results: any) {
          expect(results.err.message).toMatch(/Failed to read image-pull-auth/);
        },
      },
      {
        name: "should error for invalid argument",
        parameters: [
          ...commonParameters,
          "image-pull-auth=abc", // missing -- on --image-pull-auth
        ],
        checker: function(results: any) {
          expect(results.err).toMatch(/Unknown argument: image-pull-auth=abc$/);
        },
      },
      {
        name: "should error for multiple invalid parameters",
        parameters: [...commonParameters, "foo", "bar"],
        checker: function(results: any) {
          expect(results.err).toMatch(/Unknown arguments: foo, bar$/);
        },
      },
      {
        name: "should error for unrecognized parameters",
        parameters: [...commonParameters, "-foo", "--bar"],
        checker: function(results: any) {
          expect(results.err.message).toMatch(/Unknown arguments: f, o, bar$/);
        },
      },
    ];
    dataSet.forEach(testData => {
      test(`${testData.name}`, () => {
        let results: any;
        yargs
          .command(scanCommand)
          .parse(testData.parameters, {}, (err, argv, output) => {
            // jest / ts-jest doesn't do well with assertions in callbacks
            results = { err, argv, output };
          });
        testData.checker(results);
      });
    });
  });

  describe("findings threshold input validation", () => {
    const thresholdData: {
      threshold: any;
      shouldThrow: boolean;
    }[] = [
      {
        threshold: 1,
        shouldThrow: true,
      },
      {
        threshold: { vulnerabilities: 1 },
        shouldThrow: true,
      },
      {
        threshold: { vulnerabilities: 0 },
        shouldThrow: true,
      },
      {
        threshold: { malware: false },
        shouldThrow: true,
      },
      {
        threshold: { contents: null },
        shouldThrow: true,
      },
      {
        threshold: { badStuff: 1 },
        shouldThrow: true,
      },
      {
        threshold: { malware: 1 },
        shouldThrow: false,
      },
      {
        threshold: { vulnerabilities: { critical: 1 } },
        shouldThrow: false,
      },
      {
        threshold: { contents: { critical: 1 } },
        shouldThrow: false,
      },
      {
        threshold: { contents: { extraSevere: 1 } },
        shouldThrow: true,
      },
      {
        threshold: { checklists: { medium: 1 } },
        shouldThrow: false,
      },
    ];
    thresholdData.forEach(testData => {
      test(`should${
        testData.shouldThrow ? "" : " not"
      } throw for ${JSON.stringify(testData.threshold)}`, () => {
        const buff = Buffer.from(JSON.stringify(testData.threshold));
        const base64data = buff.toString("base64");
        let results: any;
        yargs
          .command(scanCommand)
          .parse(
            [
              "--image-name",
              "example.com/foo-image",
              "--smartcheck-host",
              "test-smartcheck.example.com",
              "--smartcheck-user",
              "test",
              "--smartcheck-password",
              "test",
              "--findings-threshold",
              `base64:${base64data}`,
            ],
            {},
            (err, argv, output) => {
              // jest / ts-jest doesn't do well with assertions in callbacks
              results = { err, argv, output };
            },
          );
        if (testData.shouldThrow) {
          expect(results.err.message).toEqual(
            expect.stringContaining("Unexpected format"),
          );
        } else {
          expect(results.err).toBeNull();
          expect(results.argv.findingsThreshold).toEqual(testData.threshold);
        }
      });
    });
  });

  describe("login tests", () => {
    beforeEach(() => {
      mockErrorLog.mockClear();
      mockExit.mockClear();
    });
    test("should error if unauthorized", async () => {
      // login
      mockAxios.post.mockImplementationOnce(async (...args) => ({
        status: 401,
        data: {},
        headers: {},
        config: {},
        statusText: "",
      }));
      await originalHandler(yargs.command(scanCommand).parse(defaultArgs));
      expect(mockExit).toHaveBeenCalledTimes(1);
      expect(mockExit).toHaveBeenCalledWith(1);
      expect(mockErrorLog).toHaveBeenCalledWith(
        expect.stringMatching(/Failed to log in/),
      );
    });
  });

  describe("image name parsing tests", () => {
    beforeEach(() => {
      // login
      mockAxios.post.mockImplementationOnce(async (...args) => ({
        status: 200,
        data: {},
        headers: {},
        config: {},
        statusText: "ok",
      }));
    });
    const imageNameTestData: {
      imageName: string;
      expectedImage: {
        registry?: string;
        repository?: string;
        tag?: string;
        digest?: string;
      };
    }[] = [
      {
        imageName: "sample:v2",
        expectedImage: {
          registry: "docker.io",
          repository: "sample",
          tag: "v2",
        },
      },
      {
        imageName: "project0/sample",
        expectedImage: {
          registry: "docker.io",
          repository: "project0/sample",
          tag: "latest",
        },
      },
      {
        imageName: "registry.example.com/proj/sample",
        expectedImage: {
          registry: "registry.example.com",
          repository: "proj/sample",
          tag: "latest",
        },
      },
      {
        imageName: "registry.example.com/sample",
        expectedImage: {
          registry: "registry.example.com",
          repository: "sample",
          tag: "latest",
        },
      },
      {
        imageName: "registry:5000/sample",
        expectedImage: {
          registry: "registry:5000",
          repository: "sample",
          tag: "latest",
        },
      },
      {
        imageName: "registry.example.com:5000/proj/sample",
        expectedImage: {
          registry: "registry.example.com:5000",
          repository: "proj/sample",
          tag: "latest",
        },
      },
      {
        imageName: "registry.example.com/proj/nested/sample",
        expectedImage: {
          registry: "registry.example.com",
          repository: "proj/nested/sample",
          tag: "latest",
        },
      },
      {
        imageName:
          "my-project/webapp@sha256:9692a2941e5afccbd1aa4cb5c88b5154e5e9039f4e3c3e16445c060ac7f4f21d",
        expectedImage: {
          registry: "docker.io",
          repository: "my-project/webapp",
          digest:
            "sha256:9692a2941e5afccbd1aa4cb5c88b5154e5e9039f4e3c3e16445c060ac7f4f21d",
        },
      },
    ];
    imageNameTestData.forEach(testData => {
      test(`test parsing ${testData.imageName}`, async () => {
        const argv = yargs
          .command(scanCommand)
          .parse([
            "--image-name",
            testData.imageName,
            "--smartcheck-host",
            "test-smartcheck.example.com",
            "--smartcheck-user",
            "test",
            "--smartcheck-password",
            "test",
          ]);

        let requestData: any;
        // create scan
        mockAxios.post.mockImplementationOnce(async (path, data) => {
          requestData = data;
          return {
            status: 200,
            data: { status: "completed" },
            headers: {},
            config: {},
            statusText: "ok",
          };
        });

        await originalHandler(argv);
        expect(requestData.source).toEqual({
          ...testData.expectedImage,
          type: "docker",
        });
      });
    });
  });

  describe("findings tests", () => {
    let stdoutMock = jest
      .spyOn(process.stdout, "write")
      .mockImplementation((val, enc, cb) => cb && cb());
    beforeEach(() => {
      // login
      mockAxios.post.mockImplementationOnce(async (...args) => ({
        status: 200,
        data: {},
        headers: {},
        config: {},
        statusText: "ok",
      }));
      // create scan
      mockAxios.post.mockImplementationOnce(async (...args) => ({
        status: 200,
        data: {
          id: "1234",
          status: "pending",
        },
        headers: {},
        config: {},
        statusText: "ok",
      }));

      mockExit.mockClear();
      stdoutMock.mockClear();
    });

    const findingsTestData: {
      findings: SmartCheck.ResultsMetrics;
      exitCode: number;
      args?: string[];
      testName?: string;
    }[] = [
      { findings: {}, exitCode: 0 },
      { findings: { malware: 1 }, exitCode: 2 },
      {
        findings: {
          vulnerabilities: {
            unresolved: { defcon1: 1 },
          },
        },
        exitCode: 2,
      },
      {
        findings: {
          vulnerabilities: {
            unresolved: { critical: 1 },
          },
        },
        exitCode: 2,
      },
      {
        findings: {
          contents: {
            unresolved: {
              defcon1: 1,
            },
          },
        },
        exitCode: 2,
      },
      {
        testName: "findings at threshold limit should be ok",
        findings: {
          vulnerabilities: {
            unresolved: { critical: 7 },
          },
        },
        exitCode: 0,
        args: [
          "--findings-threshold",
          JSON.stringify({ vulnerabilities: { critical: 7 } }),
        ],
      },
      {
        testName: "findings past threshold limit should fail",
        findings: {
          vulnerabilities: {
            unresolved: { critical: 8 },
          },
        },
        exitCode: 2,
        args: [
          "--findings-threshold",
          JSON.stringify({ vulnerabilities: { critical: 7 } }),
        ],
      },
      {
        testName: "checklist findings at threshold should be ok",
        findings: {
          checklists: {
            unresolved: {
              critical: 1,
            },
          },
        },
        exitCode: 0,
        args: [
          "--findings-threshold",
          JSON.stringify({ checklists: { critical: 1 } }),
        ],
      },
      {
        testName: "checklist findings above threshold should fail",
        findings: {
          checklists: {
            unresolved: {
              critical: 1,
            },
          },
        },
        exitCode: 2,
        args: [
          "--findings-threshold",
          JSON.stringify({ checklists: { critical: 0 } }),
        ],
      },
    ];

    findingsTestData.forEach(testData => {
      it(
        testData.testName ||
          `should exit with ${testData.exitCode} for findings: ${JSON.stringify(
            testData.findings,
          )}`,
        async () => {
          // fetch scan`
          const scanData = {
            id: "1234",
            status: "completed",
            findings: testData.findings,
          };
          mockAxios.get.mockImplementationOnce(async (...args) => ({
            status: 200,
            data: scanData,
            headers: {},
            config: {},
            statusText: "ok",
          }));

          await originalHandler(
            yargs
              .command(scanCommand)
              .parse([...defaultArgs, ...(testData.args || [])]),
          );
          expect(mockExit).toHaveBeenCalledTimes(1);
          expect(mockExit).toHaveBeenCalledWith(testData.exitCode);
          expect(JSON.parse(stdoutMock.mock.calls[0][0])).toEqual(scanData);
        },
      );
    });
  }); // end findings suite
});
