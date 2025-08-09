import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': '/app',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@storybook/react-vite'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});