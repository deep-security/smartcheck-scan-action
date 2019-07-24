import { parseReference, rename, Image } from "../docker";

describe("parseReference", () => {
  const testcases: {
    name: string;
    ref: string;
    shouldThrow?: boolean;
    expected?: Image;
  }[] = [
    {
      name: "invalid name should throw an error",
      ref: "INVALID",
      shouldThrow: true,
    },
    {
      name: "repo without registry, project, tag, or digest",
      ref: "repo",
      expected: {
        path: "repo",
      },
    },
    {
      name: "repo with tag",
      ref: "sample:v2",
      expected: {
        path: "sample",
        tag: "v2",
      },
    },
    {
      name: "repo with tag and digest",
      ref:
        "sample:v2@sha256:9692a2941e5afccbd1aa4cb5c88b5154e5e9039f4e3c3e16445c060ac7f4f21d",
      expected: {
        path: "sample",
        tag: "v2",
        digest:
          "sha256:9692a2941e5afccbd1aa4cb5c88b5154e5e9039f4e3c3e16445c060ac7f4f21d",
      },
    },
    {
      name: "no registry with project repo",
      ref: "project0/sample",
      expected: {
        path: "project0/sample",
      },
    },
    {
      name: "registry FQDN with project repo",
      ref: "registry.example.com/proj/sample",
      expected: {
        domain: "registry.example.com",
        path: "proj/sample",
      },
    },
    {
      name: "registry local name with port and repo",
      ref: "registry:5000/sample",
      expected: {
        domain: "registry:5000",
        path: "sample",
      },
    },
    {
      name: "registry local name with port and project repo",
      ref: "registry:5000/proj/sample",
      expected: {
        domain: "registry:5000",
        path: "proj/sample",
      },
    },
    {
      name: "registry FQDN with port and project repo",
      ref: "registry.example.com:5000/proj/sample",
      expected: {
        domain: "registry.example.com:5000",
        path: "proj/sample",
      },
    },
    {
      name: "nested project with registry",
      ref: "registry.example.com/proj/nested/sample",
      expected: {
        domain: "registry.example.com",
        path: "proj/nested/sample",
      },
    },
    {
      name: "nested project without registry",
      ref: "proj/nested/sample",
      expected: {
        path: "proj/nested/sample",
      },
    },
    {
      // this test originally failed (regexp had to be modified when porting from go) so keeping it forever
      name: "path with hyphen and tag",
      ref:
        "my-project/webapp@sha256:9692a2941e5afccbd1aa4cb5c88b5154e5e9039f4e3c3e16445c060ac7f4f21d",
      expected: {
        path: "my-project/webapp",
        digest:
          "sha256:9692a2941e5afccbd1aa4cb5c88b5154e5e9039f4e3c3e16445c060ac7f4f21d",
      },
    },
  ];

  testcases.forEach(testcase => {
    test(testcase.name, () => {
      if (testcase.shouldThrow) {
        expect(() => {
          parseReference(testcase.ref);
        }).toThrow();
      } else {
        const actual = parseReference(testcase.ref);

        expect(actual).toEqual(testcase.expected);
      }
    });
  });
});

describe("rename", () => {
  const testcases: {
    name: string;
    imageName: string;
    registryHost: string;
    expected: string;
  }[] = [
    {
      name: "local registry name, image with tag",
      imageName: "sample",
      registryHost: "localhost",
      expected: "localhost/sample:latest",
    },
    {
      name: "local registry name with port, image with digest",
      imageName:
        "sample@sha256:9692a2941e5afccbd1aa4cb5c88b5154e5e9039f4e3c3e16445c060ac7f4f21d",
      registryHost: "localhost:5000",
      expected:
        "localhost:5000/sample@sha256:9692a2941e5afccbd1aa4cb5c88b5154e5e9039f4e3c3e16445c060ac7f4f21d",
    },
    {
      name: "blank registry name",
      imageName: "sample",
      registryHost: "",
      expected: "sample:latest",
    },
  ];

  testcases.forEach(testcase => {
    test(testcase.name, () => {
      const actual = rename(testcase.imageName, testcase.registryHost);
      expect(actual).toEqual(testcase.expected);
    });
  });
});
