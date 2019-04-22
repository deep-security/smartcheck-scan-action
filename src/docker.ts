import * as execa_ from "execa";
const execa = execa_; // https://github.com/jvandemo/generator-angular2-library/issues/221#issuecomment-355945207

import { logger } from "./logger";

// TODO make this configurable?
const COMMAND_TIMEOUT_MS = 5 * 60 * 1000;

export interface Image {
  domain?: string;
  path: string;
  tag?: string;
  digest?: string;
}

// based on github.com/docker/distribution/reference, but with a twist
export function parseReference(ref: string) {
  const referenceRegexp = /^((?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])(?:(?:\.(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]))+)?(?::[0-9]+)?\/)?[a-z0-9]+(?:(?:(?:[._]|__|[-]*)[a-z0-9]+)+)?(?:(?:\/[a-z0-9]+(?:(?:(?:[._]|__|[-]*)[a-z0-9]+)+)?)+)?)(?::([\w][\w.-]{0,127}))?(?:@([A-Za-z][A-Za-z0-9]*(?:[-_+.][A-Za-z][A-Za-z0-9]*)*[:][0-9a-fA-F]{32,}))?$/;

  const anchoredNameRegexp = /^(?:((?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])(?:(?:\.(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]))+)?(?::[0-9]+)?)\/)?([a-z0-9]+(?:(?:(?:[._]|__|[-]*)[a-z0-9]+)+)?(?:(?:\/[a-z0-9]+(?:(?:(?:[._]|__|[-]*)[a-z0-9]+)+)?)+)?)$/;

  const result = referenceRegexp.exec(ref);

  if (result === null) {
    throw new Error("Could not parse image name " + ref);
  }

  const namePart = result[1];
  const tag = result[2];
  const digest = result[3];

  let domain;
  let path;

  const nameResult = anchoredNameRegexp.exec(namePart);

  // This next match is a heuristic not found in the docker distribution; it says
  // that if there's a period or colon in the first part of the name, then that part
  // is probably the domain. This forces `library/postgres` to be parsed as
  // `{ domain: undefined, path: 'library/postgres' }` and `localhost:5000/postgres`
  // to be parsed as `{ domain: 'localhost:5000', path: 'postgres' }`, which seems
  // to be preferable to the alternatives.
  if (nameResult !== null && /[.:]/.exec(nameResult[1])) {
    domain = nameResult[1];
    path = nameResult[2];
  } else {
    path = namePart;
  }

  return {
    domain,
    path,
    tag,
    digest,
  };
}

function referenceToString(image: Image): string {
  let fullName = image.domain || "docker.io";

  fullName += "/" + image.path;

  if (image.tag) {
    fullName += ":" + image.tag;
  }

  if (image.digest) {
    fullName += "@" + image.digest;
  }

  return fullName;
}

export function rename(imageName: string, registryHost: string): string {
  const image = parseReference(imageName);

  const newImage: Image = {
    domain: registryHost,
    path: image.path,
    tag: image.tag,
    digest: image.digest,
  };

  if (!newImage.tag && !newImage.digest) {
    newImage.tag = "latest";
  }

  return referenceToString(newImage);
}

async function run(
  cmd: string,
  args: ReadonlyArray<string>,
  options?: execa_.Options, // see workaround in imports
) {
  try {
    logger.info(`+ ${cmd} ${args.join(" ")}`);
    const { stdout } = await execa(cmd, args, {
      timeout: COMMAND_TIMEOUT_MS,
      ...options,
    });
    logger.info(`< ${stdout}`);
  } catch (error) {
    if (error.timedOut) {
      throw new Error(`< ${error.message.trim()}: timed out`);
    }

    // previously this exited with the error code, but that makes the
    // Docker error codes leak into our interface, which isn't particularly
    // desirable. We'll consider any docker error an internal error.
    throw new Error(`< ${error.message.trim()}`);
  }
}

export async function login(host: string, username: string, password: string) {
  return run(
    "docker",
    ["login", host, "--username", username, "--password-stdin"],
    {
      input: password,
    },
  );
}

export async function tag(fromImageName: string, toImageName: string) {
  return run("docker", ["tag", fromImageName, toImageName]);
}

export async function push(imageName: string) {
  return run("docker", ["push", imageName]);
}

export async function deleteImageTag(imageName: string) {
  return run("docker", ["rmi", imageName]);
}
