import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './vault/db/schemas',
  out: './vault/db/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: './vault/db/data.db',
  },
  verbose: true,
  strict: true,
});