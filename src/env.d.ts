/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly POSTGRES_HOST: string;
  readonly VITE_ENVIRONMENT: 'development' | 'staging' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// declarations.d.ts
declare module '*.css?url' {
  const url: string;
  export default url;
}

declare module '*.svg' {
  const src: string;
  export default src;
}