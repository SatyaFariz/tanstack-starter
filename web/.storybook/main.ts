import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    {
      'name': '@storybook/addon-essentials',
      'options': {
        'docs': false,
      },
    },
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    'name': '@storybook/react-vite',
    'options': {},
  },
  viteFinal: async (config) => {
    const { default: tsconfigPaths } = await import('vite-tsconfig-paths');

    config.plugins = config.plugins || [];
    config.plugins.push(tsconfigPaths());

    // Add this to fix the preview API issue
    config.define = {
      ...config.define,
      'process.env': {},
    };

    return config;
  },
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;