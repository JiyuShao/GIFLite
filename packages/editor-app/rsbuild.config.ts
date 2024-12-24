import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  plugins: [pluginReact(), pluginLess()],
  output: {
    cssModules: {
      auto: file => !file.includes('node_modules'),
      exportGlobals: true,
      mode: 'local',
    },
  },
});