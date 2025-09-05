// drizzle.vault.config.ts - Vault SQLite database configuration
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './vault/schema.ts',
  out: './vault/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: './data/vault.db',
  },
  verbose: true,
  strict: true,
});

// // vault/drizzle.config.ts
// import { defineConfig } from 'drizzle-kit'

// export default defineConfig({
//   schema: './vault/schema.ts',
//   out: './vault/migrations',
//   dialect: 'sqlite',
//   driver: 'bun:sqlite',
//   dbCredentials: {
//     url: './data/vault.db',
//   },
//   verbose: true,
//   strict: true,
// })