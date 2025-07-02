// env.ts
import PocketBase from 'pocketbase';
import { writeFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

type KeyValue = {
    key: string;
    value: string;
};

// Get CLI args
const args = Bun.argv.slice(2);
const params = Object.fromEntries(args.map((arg) => {
    const [key, value] = arg.replace(/^--/, '').split('=');
    return [key, value];
}));

const { env, email, pass } = params;

if(!env || !email || !pass) {
    // eslint-disable-next-line no-console
    console.error('Usage: bun env.ts --env=staging --email=example@email.com --pass=Pass1234');
    process.exit(1);
}

const pb = new PocketBase('http://127.0.0.1:8090');

try {
    await pb.collection('_superusers').authWithPassword(email, pass);

    if(!pb.authStore.isValid) {
        throw new Error('Invalid authentication');
    }

    const records: KeyValue[] = await pb.collection(env).getFullList({
        sort: 'key',
    });

    const envContent = records.map((record) => `${record.key}=${record.value}`).join('\n');

    // Get current script directory
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const outputPath = `${__dirname}/.env`;

    await writeFile(outputPath, envContent);

    // eslint-disable-next-line no-console
    console.log(`.env file generated at ${outputPath}`);
} catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error:', err);
    process.exit(1);
}
