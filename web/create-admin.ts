// create-admin.ts
import { auth } from '@/utils/auth';

// Get CLI args
const args = Bun.argv.slice(2);
const params = Object.fromEntries(args.map((arg) => {
  const [key, value] = arg.replace(/^--/, '').split('=');
  return [key, value];
}));

let { name, email, pass } = params;

// Prompt for missing arguments
if (!name) {
  name = prompt('Name:')?.trim() ?? '';
}
if (!email) {
  email = prompt('Email:')?.trim() ?? '';
}
if (!pass) {
  pass = prompt('Password:')?.trim() ?? '';
}

// Validate after prompting
if (!name || !email || !pass) {
  console.error('❌ Error: Missing required values (email, pass, or name).');
  console.error('Usage: bun create-admin.ts --email=example@email.com --pass=Pass1234 --name="Admin Name"');
  process.exit(1);
}

try {
  const result = await auth.api.createUser({
    body: {
      email,
      password: pass,
      name,
      role: 'admin',
    },
  });

  console.log(`✅ Admin user "${result.user.email}" created successfully with name "${name}".`);
} catch (err) {
  console.error('❌ Error:', err);
} finally {
  process.exit(0);
}
