// src/db/schema/vault.ts - Vault schema for environment variables
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const environments = sqliteTable('environments', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(), // e.g., 'development', 'production', 'staging'
  description: text('description'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});
