// src/server/signIn.server.ts
import { createServerFn } from '@tanstack/react-start';
import { vaultDb as db } from 'vault/connection';
import { users } from 'vault/schemas/auth';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { generateTokens } from '@/vault/utils/jwt';
import { setAuthCookies } from '@/vault/utils/cookies';
import type { Response } from '@/types/response';
import { HttpStatus } from '@/types/http-status';
import type { User } from 'vault/schemas/auth';

// Validation schema
const signInSchema = z.object({
  email: z.email('Invalid email format'),
  password: z.string().min(1, 'Enter your password'),
});

// Public user type (no password)
export type PublicUser = Omit<User, 'password'>;

export const signIn = createServerFn({ method: 'POST' })
  .validator(signInSchema)
  .handler(
    async ({ data }): Promise<Response<PublicUser | null>> => {
      const { email, password } = data;

      try {
        // 1. Look up user by email
        const result = await db
          .select()
          .from(users)
          .where(eq(users.email, email))
          .limit(1);

        const foundUser = result[0] as User | undefined;
        if(!foundUser) {
          return {
            httpCode: HttpStatus.UNAUTHORIZED,
            data: null,
            messages: [{ message: 'Invalid email or password', type: 'error' }],
          };
        }

        // 2. Verify password
        const isValid = await bcrypt.compare(password, foundUser.password);
        if(!isValid) {
          return {
            httpCode: HttpStatus.UNAUTHORIZED,
            data: null,
            messages: [{ message: 'Invalid email or password', type: 'error' }],
          };
        }

        // 3. Issue new tokens
        const tokens = generateTokens(foundUser.id, foundUser.email);

        // 4. Set cookies
        setAuthCookies(tokens.access_token, tokens.refresh_token);

        // 5. Return user without password
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...publicUser } = foundUser;

        return {
          httpCode: HttpStatus.OK,
          data: publicUser,
          messages: [{ message: 'Logged in successfully', type: 'success' }],
        };
      } catch {
        return {
          httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
          data: null,
          messages: [
            {
              message: 'An error occurred while logging in. Please try again.',
              type: 'error',
            },
          ],
        };
      }
    },
  );
