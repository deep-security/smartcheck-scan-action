module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src/"],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  collectCoverage: true,
};
