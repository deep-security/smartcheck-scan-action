# Deep Security Smart Check Scan Action

<img src="Trend-Micro-Logo.png">

## Scan your containers with [Deep Security Smart Check](https://www.trendmicro.com/smartcheck).

This project was built by the [Deep Security Smart Check](trendmicro.com/smartcheck) team to help you to scan your containers in your CI/CD pipeline. You can use the Smartcheck Scan Action as a standalone Docker container published in [Dockerhub](https://hub.docker.com/r/deepsecurity/smartcheck-scan-action) to scan your images. This tool is also used by the [Deep Security Smart Check plugin for Jenkins](https://plugins.jenkins.io/deepsecurity-smartcheck/) and the GitHub Action, which provides a useful wrapper for the container published in Dockerhub for Github Workflow.

## Requirements

* Have [Deep Security Smart Check](https://www.trendmicro.com/smartcheck) deployed. [Sign up now for a free trial](https://www.trendmicro.com/product_trials/download/index/us/168)!
* A container image to scan in any [supported Docker Registry](https://deep-security.github.io/smartcheck-docs/admin_docs/admin.html#supported-registries).

## Usage

Add an Action in your `.github/workflow` yml file to scan your image with Deep Security
Smart Check.

```yml
- name: Deep Security Smart Check
  uses: deep-security/Deep-Security-Smart-Check@version*
   with:
      # Mandatory
      DSSC_IMAGE_NAME: registryhost/myimage
      DSSC_SMARTCHECK_HOST: smartcheck.example.com
      DSSC_SMARTCHECK_USER: admin
      DSSC_SMARTCHECK_PASSWORD: 12345
      DSSC_IMAGE_PULL_AUTH: {"username":"<user>","password":"<password>"}

      # Optional
      DSSC_INSECURE_SKIP_TLS_VERIFY: true
      DSSC_INSECURE_SKIP_REGISTRY_TLS_VERIFY: true
      DSSC_PREREGISTRY_SCAN: false
      DSSC_PREREGISTRY_HOST: pre-registryhost.com
      DSSC_PREREGISTRY_USER: admin
      DSSC_PREREGISTRY_PASSWORD: 12345
      DSSC_RESULTS_FILE: /results.json
      DSSC_FINDINGS_THRESHOLD: '{"malware": 100, "vulnerabilities": { "defcon1": 100, "critical": 100, "high": 100 }, "contents": { "defcon1": 100, "critical": 100, "high": 100 }, "checklists": { "defcon1": 100, "critical": 100, "high": 100 }}'    
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
  - If you're using AWS, you can use this example below: 

    ```json
    '{"aws":{"region":"us-east-1","accessKeyID":"$AWS_ACCESS_KEY_ID","secretAccessKey":"$AWS_SECRET_ACCESS_KEY"}}'
    ```
  **PS.: ALWAYS use secrets to not expose your credentials!**

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

## Example Workflow Using Github Actions

```yml
name: Deep Security Smart Check

on: 
  push:
    branches: 
      - master
      
jobs:      
    SmartCheck-Scan-Action:
       runs-on: ubuntu-latest
       steps:

       # AWS Example:
        - name: Deep Security Smart Check Scan ECR
          uses: deep-security/Deep-Security-Smart-Check@version*
          with:
            DSSC_IMAGE_NAME: accountid.dkr.ecr.region.amazonaws.com/myimage
            DSSC_SMARTCHECK_HOST: ${{ secrets.DSSC_SMARTCHECK_HOST }}
            DSSC_SMARTCHECK_USER: ${{ secrets.DSSC_SMARTCHECK_USER }}
            DSSC_SMARTCHECK_PASSWORD: ${{ secrets.DSSC_SMARTCHECK_PASSWORD }}
            # You will need to generate an access key and secret for your AWS user
            DSSC_IMAGE_PULL_AUTH: '{"aws":{"region":"us-east-1","accessKeyID":"$AWS_ACCESS_KEY_ID" "secretAccessKey":"$AWS_SECRET_ACCESS_KEY"}}'
            DSSC_FINDINGS_THRESHOLD: '{"malware": 100, "vulnerabilities": { "defcon1": 100, "critical": 100, "high": 100 }, "contents": { "defcon1": 100, "critical": 100, "high": 100 }, "checklists": { "defcon1": 100, "critical": 100, "high": 100 }}'
            DSSC_INSECURE_SKIP_TLS_VERIFY: true
            DSSC_INSECURE_SKIP_REGISTRY_TLS_VERIFY: true

        # Azure Example:
        - name: Deep Security Smart Check Scan ACR
          uses: deep-security/Deep-Security-Smart-Check@version*
          with:
            DSSC_IMAGE_NAME: myrepo.azurecr.io/myimage
            DSSC_SMARTCHECK_HOST: ${{ secrets.DSSC_SMARTCHECK_HOST }}
            DSSC_SMARTCHECK_USER: ${{ secrets.DSSC_SMARTCHECK_USER }}
            DSSC_SMARTCHECK_PASSWORD: ${{ secrets.DSSC_SMARTCHECK_PASSWORD }}
            DSSC_IMAGE_PULL_AUTH: '{"username": "${{ secrets.ACR_USER }}","password": "${{ secrets.ACR_PASSWORD }}"}'
            DSSC_FINDINGS_THRESHOLD: '{"malware": 100, "vulnerabilities": { "defcon1": 100, "critical": 100, "high": 100 }, "contents": { "defcon1": 100, "critical": 100, "high": 100 }, "checklists": { "defcon1": 100, "critical": 100, "high": 100 }}'            
            DSSC_INSECURE_SKIP_TLS_VERIFY: true
            DSSC_INSECURE_SKIP_REGISTRY_TLS_VERIFY: true
        
        # GCP Example:
        - name: Deep Security Smart Check Scan GCR
          uses: deep-security/Deep-Security-Smart-Check-Scan-Action@version*
          with:
            DSSC_IMAGE_NAME: region.gcr.io/projectname/myimage
            DSSC_SMARTCHECK_HOST: ${{ secrets.DSSC_SMARTCHECK_HOST }}
            DSSC_SMARTCHECK_USER: ${{ secrets.DSSC_SMARTCHECK_USER }}
            DSSC_SMARTCHECK_PASSWORD: ${{ secrets.DSSC_SMARTCHECK_PASSWORD }}
            # You will need to generate a JSON service account key in GCP and save it as a secret
            DSSC_IMAGE_PULL_AUTH: '{"username": "_json_token", "password": "${{ secrets.GCP_JSON_KEY }}"}'
            DSSC_FINDINGS_THRESHOLD: '{"malware": 100, "vulnerabilities": { "defcon1": 100, "critical": 100, "high": 100 }, "contents": { "defcon1": 100, "critical": 100, "high": 100 }, "checklists": { "defcon1": 100, "critical": 100, "high": 100 }}'            
            DSSC_INSECURE_SKIP_TLS_VERIFY: true
            DSSC_INSECURE_SKIP_REGISTRY_TLS_VERIFY: true
```
The example above demonstrates how to add a Deep Security Smart Check Scan action as a step in your Github Workflow. This can be used to scan an image from a container registry in either Google Container Registry, Microsoft Azure Container Registry or Amazon Elastic Container Registry.

For Google Container Registry and Microsoft Azure Container Registry, the `username` and `password` required for `DSSC_IMAGE_PULL_AUTH` are the same as the docker login credentials you would use to authenticate to a registry in the provided platform:
- [Google Cloud Platform](https://cloud.google.com/container-registry/docs/advanced-authentication#json-key)
- [Microsoft Azure](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-authentication)

To authenticate to an Amazon Elastic Container Registry the `DSSC_IMAGE_PULL_AUTH` should be formatted to match the `credentials.aws` object specified in the [Smartcheck API Documentation to create a Scan](https://deep-security.github.io/smartcheck-docs/api/index.html#operation/createScan).

## Example Workflow Running a Docker Container

```yml
name: Deep Security Smart Check Pipeline Example

on: 
  push:
    branches: 
      - master
      
jobs:      
    SmartCheck-Scan-Action:
       runs-on: ubuntu-latest
       steps:
        - name: Deep Security Smart Check
          run: |
          docker run deepsecurity/smartcheck-scan-action --image-name registryhost/myimage --smartcheck-host=smartcheck.example.com --smartcheck-user=admin --smartcheck-password=12345 --image-pull-auth='{"username":"<user>","password":"<password>"}'          
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