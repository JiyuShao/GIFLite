import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginReact } from '@rsbuild/plugin-react';

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
