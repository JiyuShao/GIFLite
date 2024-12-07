/*
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-11-21 11:50:42
 * @LastEditTime: 2024-12-07 17:43:17
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
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  pluginReactConfig,
];
