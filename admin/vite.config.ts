// vite.config.ts
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    port: 3002,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    svgr(),
    tailwindcss(),
    tsConfigPaths(),
    tanstackStart({
      customViteReactPlugin: true,
      client: {
        entry: 'admin/client.tsx',
      },
      server: {
        entry: 'admin/server.ts',
      },
    }),
    viteReact(),
  ],
});