import { sqliteTable, integer, text, unique } from 'drizzle-orm/sqlite-core';
import { sql, relations } from 'drizzle-orm';
import { users } from './auth';

// -------------------
// Services
// -------------------
export const services = sqliteTable('services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
  description: text('description'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
});

// -------------------
// Environments
// -------------------
export const environments = sqliteTable('environments', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name', { enum: ['development', 'staging', 'production'] })
    .notNull()
    .unique(),
});

// -------------------
// Secrets (Versioned)
// -------------------
export const secrets = sqliteTable(
  'secrets',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    serviceId: integer('service_id')
      .notNull()
      .references(() => services.id, { onDelete: 'cascade' }),
    environmentId: integer('environment_id')
      .notNull()
      .references(() => environments.id, { onDelete: 'cascade' }),
    key: text('key').notNull(),
    value: text('value').notNull(),
    version: integer('version').notNull(),
    isLatest: integer('is_latest', { mode: 'boolean' }).notNull().default(true),
    createdBy: integer('created_by')
      .notNull()
      .references(() => users.id, { onDelete: 'set null' }),
    createdAt: integer('created_at', { mode: 'timestamp' })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (table) => [
    // ✅ Ensure no duplicate version for same service+env+key
    unique('unique_secret_version').on(
      table.serviceId,
      table.environmentId,
      table.key,
      table.version,
    ),
  ],
);

// -------------------
// Access Logs
// -------------------
export const accessLogs = sqliteTable('access_logs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id, { onDelete: 'set null' }),
  serviceId: integer('service_id').references(() => services.id, { onDelete: 'cascade' }),
  environmentId: integer('environment_id').references(() => environments.id, { onDelete: 'cascade' }),
  secretKey: text('secret_key'),
  action: text('action', { enum: ['read', 'write', 'delete', 'rollback'] }).notNull(),
  newVersion: integer('new_version'),
  oldVersion: integer('old_version'),
  timestamp: integer('timestamp', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
});

// -------------------
// Relations
// -------------------
export const servicesRelations = relations(services, ({ many }) => ({
  secrets: many(secrets),
  accessLogs: many(accessLogs),
}));

export const environmentsRelations = relations(environments, ({ many }) => ({
  secrets: many(secrets),
  accessLogs: many(accessLogs),
}));

export const secretsRelations = relations(secrets, ({ one }) => ({
  service: one(services, {
    fields: [secrets.serviceId],
    references: [services.id],
  }),
  environment: one(environments, {
    fields: [secrets.environmentId],
    references: [environments.id],
  }),
  createdBy: one(users, {
    fields: [secrets.createdBy],
    references: [users.id],
  }),
}));

export const accessLogsRelations = relations(accessLogs, ({ one }) => ({
  user: one(users, {
    fields: [accessLogs.userId],
    references: [users.id],
  }),
  service: one(services, {
    fields: [accessLogs.serviceId],
    references: [services.id],
  }),
  environment: one(environments, {
    fields: [accessLogs.environmentId],
    references: [environments.id],
  }),
}));

// -------------------
// Type Exports
// -------------------
export type Service = typeof services.$inferSelect;
export type NewService = typeof services.$inferInsert;

export type Environment = typeof environments.$inferSelect;
export type NewEnvironment = typeof environments.$inferInsert;

export type Secret = typeof secrets.$inferSelect;
export type NewSecret = typeof secrets.$inferInsert;

export type AccessLog = typeof accessLogs.$inferSelect;
export type NewAccessLog = typeof accessLogs.$inferInsert;
