module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/warnings',
    //"prettier",
    //"prettier/@typescript-eslint",
    'plugin:jest/all',
  ],
  plugins: [
    //'prettier',
    'svelte3',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
      },
    },
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
    '@typescript-eslint/member-delimiter-style': 'off',
    semi: [1, 'never'],
    quotes: [2, 'single', { avoidEscape: true }],
    'jest/prefer-expect-assertions': 'warn',
  },
  settings: {
    'import/core-modules': 'svelte',
  },
}
