// eslint.config.mjs
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import stylisticPlugin from '@stylistic/eslint-plugin'

export default [
  {
    ignores: [
      '.nitro/**',
      '.output/**',
      '.tanstack/**'
    ],
  },
  // Global settings
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        browser: true,
      },
      parser: typescriptParser,
    },
  },
  // Core eslint recommended rules
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'jsx-quotes': ['error', 'prefer-double'],
      'semi': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'no-trailing-spaces': ['error'],
      'no-multi-spaces': ['error'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      'prefer-arrow-callback': ['error'],
      'arrow-parens': ['error', 'always'],
      'no-console': ['error'],
    },
  },
  // TypeScript-specific config
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@stylistic': stylisticPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': ['error'],
      '@stylistic/semi': 'error',
      '@stylistic/member-delimiter-style': [
        'error',
        {
          'multiline': {
            'delimiter': 'semi',
            'requireLast': true
          },
          'singleline': {
            'delimiter': 'semi',
            'requireLast': false
          }
        }
      ],
      '@stylistic/keyword-spacing': [
        'error', 
        { 
          'overrides': {
            'if': { 'after': false },
            'for': { 'after': false },
            'while': { 'after': false },
          } 
        }
      ]
    },
  },
  // React-specific config
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      'react-refresh': reactRefreshPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];