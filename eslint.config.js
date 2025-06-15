import { FlatCompat } from '@eslint/eslintrc'
import eslintJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

const compat = new FlatCompat()

export default [
  eslintJs.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: globals.node,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {},
  },
  ...compat.config({ extends: ['plugin:@typescript-eslint/recommended'] }),
]
