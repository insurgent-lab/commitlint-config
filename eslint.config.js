import js from '@eslint/js';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
  },
  {
    // Ignore patterns
    ignores: ['coverage/**'],
  },
  js.configs.recommended,
  prettierConfig,
  {
    // Base settings
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es6,
      },
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
  {
    // Jest settings for test files
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      ...jestPlugin.configs.style.rules,
    },
  },
];
