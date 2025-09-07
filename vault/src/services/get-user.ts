// src/server/get-user.server.ts
import { createServerFn } from '@tanstack/react-start';
import { requireAuth } from 'vault/middleware/auth';
import type { Response } from '@/types/response';
import { HttpStatus } from '@/types/http-status';
import type { User } from 'vault/db/schemas/auth';
import { vaultDb as db } from 'vault/db/connection';
import { users } from 'vault/db/schemas/auth';
import { eq } from 'drizzle-orm';

// Public user type (no password)
export type PublicUser = Omit<User, 'password'>;

export const getUser = createServerFn()
  .middleware([requireAuth])
  .handler(async ({ context }): Promise<Response<PublicUser | null>> => {
    const { userId } = context.userSession;

    try {
      const rows = await db
        .select()
        .from(users)
        .where(eq(users.id, userId))
        .limit(1);

      const foundUser = rows[0] as User | undefined;
      if(!foundUser) {
        return {
          httpCode: HttpStatus.NOT_FOUND,
          data: null,
          messages: [{ message: 'User not found', type: 'error' }],
        };
      }

      // Strip out password
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...publicUser } = foundUser;

      return {
        httpCode: HttpStatus.OK,
        data: publicUser,
        messages: [{ message: 'Fetched current user successfully', type: 'success' }],
      };
    } catch {
      return {
        httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        messages: [{ message: 'Failed to fetch user', type: 'error' }],
      };
    }
  });
