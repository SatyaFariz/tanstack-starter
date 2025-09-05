// vite.config.ts
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    port: 3003,
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
      target: 'bun',
      customViteReactPlugin: true,
      client: {
        entry: 'vault/client.tsx',
      },
      server: {
        entry: 'vault/server.ts',
      },
      tsr: {
        generatedRouteTree: 'src/vault/routeTree.gen.ts',
        routesDirectory: 'src/vault/routes',
      },
    }),
    viteReact(),
  ],
});