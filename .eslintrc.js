module.exports = {
  env: { es6: true },
  extends: [ 'eslint:recommended', 'airbnb' ],
  globals: { process: true, console: true, window: true, document: true },
  parserOptions: {
    ecmaFeatures: { experimentalObjectRestSpread: true, jsx: true },
    sourceType: 'module'
  },
  rules: {
    'no-console': [ 'error', { allow: [ 'error' ] } ],
    'react/jsx-filename-extension': 0
  }
};
