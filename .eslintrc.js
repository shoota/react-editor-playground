module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config.{js,ts}',
          '**/*.spec.{ts,tsx}',
          '**/.storybook/**/*.{ts,tsx}',
          '**/*.stories.{ts,tsx}',
          '**/__fixtures__/**/*.{ts,tsx}',
        ],
      },
    ],
    'import/extensions': ['error', 'never'],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        paths: ['./src', './node_modules'],
      },
    },
  },
}
