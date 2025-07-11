// vite.config.ts
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    svgr(),
    tsConfigPaths(),
    tanstackStart(),
  ],
});