module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",

  rootDir: `${__dirname}`,

  testMatch: ["<rootDir>/src/***/**/__test__/*.spec.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
};
