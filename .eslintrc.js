module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "no-var": "error",
    eqeqeq: ["error", "always"],
  },

  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
      rules: {
        // These ESLint rules are known to cause issues with typescript-eslint
        // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
        camelcase: "off",
        indent: "off",
        "no-array-constructor": "off",
        "no-unused-vars": "off",

        "@typescript-eslint/no-angle-bracket-type-assertion": "warn",
        "@typescript-eslint/no-array-constructor": "warn",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            args: "none",
            ignoreRestSiblings: true,
          },
        ],
        "@typescript-eslint/camelcase": "warn",
        "@typescript-eslint/no-use-before-define": "warn",
      },
    },
    {
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      plugins: ["jest"],
      env: {
        // Bugged, see https://github.com/jest-community/eslint-plugin-jest/issues/128
        // "jest/globals": true,
        // This list isn't as complete but should work for now
        jest: true,
      },
      rules: {
        "no-console": "off",
      },
    },
  ],
};
