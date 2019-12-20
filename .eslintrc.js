module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint'
  ],
  env: {
    es2020: true,
    node: true, // EDIT_ME
    browser: true, // EDIT_ME
  },
  extends: [
    'standard',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    '@typescript-eslint/tslint/config': ['error', {
      "lintFile": './tslint.json',
    }]
  }
}
