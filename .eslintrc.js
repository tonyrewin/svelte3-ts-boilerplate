module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte', '.ts'],
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  extends: [
		"eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
		"plugin:import/errors",
		"plugin:import/warnings",
    "plugin:jest/all"
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
    ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'warn',
    'linebreak-style': ['warn', 'unix'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'semi': [1, 'never'],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'jest/prefer-expect-assertions': 'warn'
  },
  settings: {
    'import/core-modules': 'svelte'
  }
}