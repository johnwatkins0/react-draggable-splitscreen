module.exports = {
  parser: 'babel-eslint',
  env: { browser: true, es6: true, 'jest/globals': true },
  extends: ['airbnb'],
  plugins: ['jest'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-uses-vars': [2],
  },
};
