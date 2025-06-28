// create-admin.ts
import { auth } from '@/utils/auth';

// Get CLI args
const args = Bun.argv.slice(2);
const params = Object.fromEntries(args.map(arg => {
    const [key, value] = arg.replace(/^--/, '').split('=');
    return [key, value];
}));

const { email, pass } = params;

if (!email || !pass) {
    console.error("Usage: bun create-admin.ts --email=example@email.com --pass=Pass1234");
    process.exit(1);
}

try {
    // Use the transaction-bound client
    const result = await auth.api.createUser({
        body: {
            email,
            password: pass,
            name: email,
            role: 'admin'
        }
    })

    console.log(`✅ Admin user ${result.user.email} created successfully.`);
} catch (err) {
    console.error("Error:", err);
} finally {
    process.exit(1);
}
