module.exports = {
  testMatch: ['**/?(*.)(spec|test).js?(x)'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index.js'],
};
