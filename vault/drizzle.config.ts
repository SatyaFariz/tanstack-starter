import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './vault/schemas',
  out: './vault/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: './vault/data.db',
  },
  verbose: true,
  strict: true,
});