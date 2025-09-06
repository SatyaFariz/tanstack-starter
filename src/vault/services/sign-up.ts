import { createServerFn } from '@tanstack/react-start';
import { vaultDb as db } from 'vault/connection';
import { users } from 'vault/schemas/auth';
import { count } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import type { Response } from '@/types/response';
import type { User } from 'vault/schemas/auth';
import { HttpStatus } from '@/types/http-status';
import { setHeader } from '@tanstack/react-start/server';
import { generateTokens } from '../utils/jwt';

// Validation schema
const signUpSchema = z.object({
  email: z.email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Public user type (omit password)
export type PublicUser = Omit<User, 'password'>;

export const signUp = createServerFn({ method: 'POST' })
  .validator(signUpSchema)
  .handler(
    async ({ data }): Promise<Response<PublicUser | null>> => {
      const { email, password } = data;

      try {
        const result = await db.transaction(async (tx) => {
          const userCount = await tx.select({ count: count() }).from(users);
          const isFirstUser = userCount[0]?.count === 0;

          const hashedPassword = await bcrypt.hash(password, 12);

          const inserted = await tx
            .insert(users)
            .values({
              email,
              password: hashedPassword,
              avatar: 'default',
              emailVerified: isFirstUser,
            })
            .returning({
              id: users.id,
              email: users.email,
              avatar: users.avatar,
              emailVerified: users.emailVerified,
              createdAt: users.createdAt,
              updatedAt: users.updatedAt,
            });

          const createdUser = inserted[0] as PublicUser | undefined;
          if(!createdUser) throw new Error('User creation failed');

          return { createdUser, isFirstUser };
        });

        const { createdUser, isFirstUser } = result;

        // If first user, issue tokens and set cookies
        if(isFirstUser) {
          const tokens = generateTokens(createdUser.id, createdUser.email);

          // ✅ Secure cookies
          setHeader('Set-Cookie', [
            `access_token=${tokens.access_token}; HttpOnly; Path=/; Max-Age=900; SameSite=Strict`,
            `refresh_token=${tokens.refresh_token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict`,
          ]);
        }

        return {
          httpCode: HttpStatus.CREATED,
          data: createdUser,
          messages: [
            {
              message: isFirstUser
                ? 'Welcome! Account created and signed in successfully.'
                : 'Account created successfully. Please verify your email to sign in.',
              type: 'success',
            },
          ],
        } satisfies Response<PublicUser>;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        if(err.cause?.code === 'SQLITE_CONSTRAINT_UNIQUE' || err.code === 'SQLITE_CONSTRAINT') {
          return {
            httpCode: HttpStatus.CONFLICT,
            data: null,
            messages: [{ message: 'User with this email already exists', type: 'error' }],
          } satisfies Response<null>;
        }

        return {
          httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
          data: null,
          messages: [
            {
              message: 'An error occurred while creating your account. Please try again.',
              type: 'error',
            },
          ],
        } satisfies Response<null>;
      }
    },
  );
