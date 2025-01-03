/*
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-11-21 11:50:42
 * @LastEditTime: 2025-01-03 16:38:28
 */
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    ignores: [
      // Ignore dotfiles
      '.*.js',
      'node_modules/',
      'dist/',
      'assets/',
    ],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  pluginReactConfig,
];
