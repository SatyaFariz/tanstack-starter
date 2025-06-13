import type { Config } from 'drizzle-kit';

export default {
    schema: './db/schema.ts',
    out: './db/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        host: process.env.POSTGRES_HOST as string,
        port: parseInt(process.env.POSTGRES_PORT as string),
        database: process.env.POSTGRES_DB as string,
        user: process.env.POSTGRES_USER as string,
        password: process.env.POSTGRES_PASSWORD as string,
        ssl: false, // Disable SSL for local development
    },
    verbose: true,
    strict: true,
} satisfies Config;