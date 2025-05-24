// app.config.ts
import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    preset: 'bun',
  },
  vite: {
    plugins: [
      svgr(),
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
});