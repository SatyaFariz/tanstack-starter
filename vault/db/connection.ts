/* eslint-disable no-console */
// src/db/server-connection.ts - Universal database connection
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as vaultSchema from './schemas';

// Universal SQLite connection using @libsql/client
const sqliteClient = createClient({
  url: 'file:./vault/db/data.db',
});

export const vaultDb = drizzle(sqliteClient, {
  schema: vaultSchema,
});

// Type exports
export type VaultDb = typeof vaultDb;

// Connection health check
export async function checkServerConnection() {
  try {
    await sqliteClient.execute('SELECT 1');
    console.log('✅ Universal SQLite connection successful');
    return true;
  } catch (error) {
    console.error('❌ Server database connection failed:', error);
    return false;
  }
}