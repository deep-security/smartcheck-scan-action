# Deep Security Smart Check Scan Action

For scanning your images as part of your CI pipeline using [Deep Security Smart
Check][].

[deep security smart check]: https://www.trendmicro.com/smartcheck

This tool is used by the Deep Security Smart Check plugin for Jenkins and can
also be used as a [GitHub Action](https://github.com/features/actions).

## Usage

Add an Action in your `main.workflow` file to scan your image with Deep Security
Smart Check.

```main.workflow
action "Scan with Deep Security Smart Check" {
  needs = "Push image to GCR"
  uses = "docker://deepsecurity/smartcheck-scan-action"
  secrets = [
    "DSSC_SMARTCHECK_HOST",
    "DSSC_SMARTCHECK_USER",
    "DSSC_SMARTCHECK_PASSWORD",
    "DSSC_IMAGE_PULL_AUTH"
  ]
  args = ["--image-name registry.example.com/my-project/my-image"]
}
```

### Parameters

All parameters can be passed as CLI parameters or environment variables by
switching to all caps and prefixing with `DSSC_`. Example: `--image-name` could
be given with `DSSC_IMAGE_NAME`.

- **smartcheck-host | DSSC_SMARTCHECK_HOST**
  - The hostname of the Deep Security Smart Check deployment. Example:
    `smartcheck.example.com`
- **insecure-skip-tls-verify | DSSC_INSECURE_SKIP_TLS_VERIFY**
  - If the client should ignore certificate errors when connecting to Deep
    Security Smart Check. You may want to set this if you've configured a self
    signed cert.
- **smartcheck-user | DSSC_SMARTCHECK_USER**
  - The username to authenticate with the Deep Security Smart Check deployment
- **smartcheck-password | DSSC_SMARTCHECK_PASSWORD**
  - The password to authenticate with the Deep Security Smart Check deployment
- **image-name | DSSC_IMAGE_NAME**
  - The name of the image to scan
- **image-pull-auth | DSSC_IMAGE_PULL_AUTH**

  - A JSON object of credentials for authenticating with the registry to pull
    the image from. Example:

    ```json
    {
      "username": "<user>",
      "password": "<password>"
    }
    ```

    See [creating a scan][] in the [Deep Security Smart Check API Reference][]
    for additional registry credentials options.

- **insecure-skip-registry-tls-verify | DSSC_INSECURE_SKIP_REGISTRY_TLS_VERIFY**
  - If Deep Security Smart Check should ignore certificate errors from the image
    registry.
- **preregistry-scan | DSSC_PREREGISTRY_SCAN**
  - Specify this option to trigger a "pre-registry scan", which pushes the image
    to a temporary registry on the scan system.
- **preregistry-host | DSSC_PREREGISTRY_HOST**
  - The hostname of the temporary registry. Defaults to the `smartcheck-host` on
    port 5000.
- **preregistry-user | DSSC_PREREGISTRY_USER**
  - The username to authenticate with the temporary registry.
- **preregistry-password | DSSC_PREREGISTRY_PASSWORD**
  - The password to authenticate with the temporary registry.

[deep security smart check api reference]:
  https://deep-security.github.io/smartcheck-docs/api/index.html
[creating a scan]:
  https://deep-security.github.io/smartcheck-docs/api/index.html#operation/createScan

- **results-file | DSSC_RESULTS_FILE** - default: `scan-results.json`
  - The path to write the scan results to. If not provided, the scan results
    will be written to stdout.
- **findings-threshold | DSSC_FINDINGS_THRESHOLD**

  - A JSON object that can be used to fail this step if an image contains
    findings that exceed the threshold.

    Default value:

    ```json
    {
      "malware": 0,
      "vulnerabilities": {
        "defcon1": 0,
        "critical": 0,
        "high": 0
      },
      "contents": {
        "defcon1": 0,
        "critical": 0,
        "high": 0
      },
      "checklists": {
        "defcon1": 0,
        "critical": 0,
        "high": 0
      }
    }
    ```

    Schema:

    ```typescript
    interface FindingsThreshold {
      malware?: number;
      contents?: {
        defcon1?: number;
        critical?: number;
        high?: number;
        medium?: number;
        low?: number;
        negligible?: number;
        unknown?: number;
      };
      vulnerabilities?: {
        defcon1?: number;
        critical?: number;
        high?: number;
        medium?: number;
        low?: number;
        negligible?: number;
        unknown?: number;
      };
      checklists?: {
        defcon1?: number;
        critical?: number;
        high?: number;
        medium?: number;
        low?: number;
        negligible?: number;
        unknown?: number;
      };
    }
    ```

## Example Workflow

```main.workflow
workflow "Push image" {
  on = "push"
  resolves = "Scan with Deep Security Smart Check"
}

action "Build image" {
  uses = "docker://docker:stable"
  args = ["build", "-t", "registry.example.com/my-project/my-image", "."]
}

action "Docker Login" {
  uses = "actions/docker/login@master"
  env = {
    DOCKER_REGISTRY_URL = "registry.example.com"
  }
  secrets = [
    "DOCKER_USERNAME",
    "DOCKER_PASSWORD"
  ]
}

action "Push image" {
  needs = ["Build image", "Docker Login"]
  uses = "actions/docker/cli@master"
  args = "push registry.example.com/my-project/my-image"
}

action "Scan with Deep Security Smart Check" {
  needs = "Push image"
  uses = "docker://deepsecurity/smartcheck-scan-action"
  secrets = [
    "DSSC_SMARTCHECK_HOST",
    "DSSC_SMARTCHECK_USER",
    "DSSC_SMARTCHECK_PASSWORD",
    "DSSC_IMAGE_PULL_AUTH"
  ]
  args = ["--image-name registry.example.com/my-project/my-image"]
}
```

## Pre-registry scanning

To enable pre-registry scanning, you will need to provide the
`preregistry-scan`, `preregistry-user`, and `preregistry-password` parameters to
the scan. If you are running the temporary registry as a separate service or on
a port other than 5000, you will also need to provide the `preregistry-host`
parameter, specifying the hostname and port number where you are running the
temporary registry.

**IMPORTANT:** The pre-registry scan needs access to the Docker daemon through
the Docker socket, so if you are running the scan action as a container, make
sure to mount `/var/run/docker.sock`. If you are using `smartcheck-scan-action`
as a GitHub Action, the runtime environment will do this step for you.

## Contributing

If you encounter a bug, think of a useful feature, or find something confusing
in the docs, please
[create a new issue](https://github.com/deep-security/smartcheck-scan-action/issues/new)!

We :heart: pull requests. If you'd like to fix a bug, contribute to a feature or
just correct a typo, please feel free to do so.

If you're thinking of adding a new feature, consider opening an issue first to
discuss it to ensure it aligns to the direction of the project (and potentially
save yourself some time!).

## Support

Official support from Trend Micro is not available. Individual contributors may
be Trend Micro employees, but are not official support.
