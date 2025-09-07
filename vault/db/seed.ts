/* eslint-disable no-console */
// src/db/seed.ts
import { vaultDb as db } from './connection'; // adjust path to your Drizzle connection
import { environments, services } from './schemas';
import { eq } from 'drizzle-orm';

async function seed() {
  console.log('🌱 Starting seed...');

  // ----------------------
  // Environments
  // ----------------------
  const envs = [
    { name: 'development' },
    { name: 'staging' },
    { name: 'production' },
  ] satisfies { name: 'development' | 'staging' | 'production' }[];

  for(const env of envs) {
    const existing = await db
      .select()
      .from(environments)
      .where(eq(environments.name, env.name))
      .get();

    if(!existing) {
      await db.insert(environments).values(env).run();
      console.log(`✅ Inserted environment: ${env.name}`);
    } else {
      console.log(`⚠️ Environment already exists: ${env.name}`);
    }
  }

  // ----------------------
  // Services
  // ----------------------
  const svcs = [
    { name: 'App', description: 'Main application service' },
    { name: 'Postgres', description: 'Database service' },
    { name: 'Caddy', description: 'Reverse proxy & SSL service' },
  ];

  for(const svc of svcs) {
    const existing = await db
      .select()
      .from(services)
      .where(eq(services.name, svc.name))
      .get();

    if(!existing) {
      await db.insert(services).values(svc).run();
      console.log(`✅ Inserted service: ${svc.name}`);
    } else {
      console.log(`⚠️ Service already exists: ${svc.name}`);
    }
  }

  console.log('🌱 Seeding complete.');
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  });
