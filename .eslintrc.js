module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'max-classes-per-file': ['error', { ignoreExpressions: true, max: 2 }],
    'no-restricted-globals': 'off',
    'no-restricted-syntax': 'off',
  },
};
