import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [],

  framework: {
    'name': '@storybook/react-vite',
    'options': {},
  },

  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(tsconfigPaths());

    // Add this to fix the preview API issue
    config.define = {
      ...config.define,
      'process.env': {},
    };

    return config;
  },

  core: {
    disableTelemetry: true,
  },
};
export default config;