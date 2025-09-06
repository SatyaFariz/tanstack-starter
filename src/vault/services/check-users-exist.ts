// src/server/check-users-exist.server.ts
import { createServerFn } from '@tanstack/react-start';
import { vaultDb as db } from 'vault/connection';
import { users } from 'vault/schemas/auth';

export const checkUsersExist = createServerFn()
  .handler(async () => {
    // Return true as soon as one user is found
    const rows = await db
      .select({ exists: users.id })
      .from(users)
      .limit(1);

    return rows.length > 0;
  });
