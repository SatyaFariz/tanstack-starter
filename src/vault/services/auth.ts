import { createServerFn } from '@tanstack/react-start';
import { vaultDb as db } from 'vault/connection';
import { users } from 'vault/schemas/auth';
import { count } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import type { Response, AuthResponse } from '@/types/response';
import type { User } from 'vault/schemas/auth';

// Validation schema
const signUpSchema = z.object({
  email: z.email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// JWT utility
const generateTokens = (userId: number, email: string) => {
  const { JWT_SECRET, JWT_REFRESH_SECRET } = process.env;

  if(!JWT_SECRET || !JWT_REFRESH_SECRET) {
    throw new Error('JWT secrets (JWT_SECRET, JWT_REFRESH_SECRET) must be set in env');
  }

  const access_token = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '15m' });
  const refresh_token = jwt.sign({ userId, email }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

  return { access_token, refresh_token };
};

export const signUp = createServerFn({ method: 'POST' })
  .validator(signUpSchema)
  .handler(
    async ({ data }): Promise<Response<User | null> | AuthResponse<User>> => {
      const { email, password } = data;

      try {
        const result = await db.transaction(async (tx) => {
          // Count total users
          const userCount = await tx.select({ count: count() }).from(users);
          const isFirstUser = userCount[0]?.count === 0;

          // Hash password
          const hashedPassword = await bcrypt.hash(password, 12);

          // Insert user (let DB enforce unique email)
          const inserted = await tx
            .insert(users)
            .values({
              email,
              password: hashedPassword,
              avatar: 'default',
              emailVerified: isFirstUser,
            })
            .returning();

          const createdUser = inserted[0] as User | undefined;
          if(!createdUser) {
            throw new Error('User creation failed');
          }

          return { createdUser, isFirstUser };
        });

        const { createdUser, isFirstUser } = result;

        if(isFirstUser) {
          const tokens = generateTokens(createdUser.id, createdUser.email);
          return {
            data: createdUser,
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token,
            messages: [
              {
                message:
                  'Welcome! Account created and signed in successfully.',
                type: 'success',
              },
            ],
          } satisfies AuthResponse<User>;
        }

        return {
          data: createdUser,
          messages: [
            {
              message:
                'Account created successfully. Please verify your email to sign in.',
              type: 'success',
            },
          ],
        } satisfies Response<User>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        // Handle unique constraint violation (duplicate email)
        if(err.message?.includes('UNIQUE') || err.code === 'SQLITE_CONSTRAINT') {
          return {
            data: null,
            messages: [
              {
                message: 'User with this email already exists',
                type: 'error',
              },
            ],
          } satisfies Response<null>;
        }
        return {
          data: null,
          messages: [
            {
              message:
                'An error occurred while creating your account. Please try again.',
              type: 'error',
            },
          ],
        } satisfies Response<null>;
      }
    },
  );
