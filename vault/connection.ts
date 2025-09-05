// src/db/index.ts - Database connections setup
import { drizzle as drizzleSQLite } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import * as vaultSchema from './schemas';

// SQLite connection for vault/secrets management
const sqliteClient = new Database('./vault/data.db', {
  create: true,
  readwrite: true,
});
export const vaultDb = drizzleSQLite(sqliteClient, {
  schema: vaultSchema,
});

// Type exports
export type VaultDb = typeof vaultDb;

// Connection health check
export async function checkConnections() {
  try {
    vaultDb.run('SELECT 1');
    // eslint-disable-next-line no-console
    console.log('✅ SQLite vault connection successful');

    return true;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Database connection failed:', error);
    return false;
  }
}