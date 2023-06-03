module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['coverage', '.eslintrc.js'],
  overrides: [
    {
      files: ['**/*.test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      env: {
        jest: true,
      },
    },
  ],
};
