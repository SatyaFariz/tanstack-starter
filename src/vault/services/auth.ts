import { createServerFn } from '@tanstack/react-start';
import { vaultDb as db } from 'vault/connection';
import { users } from 'vault/schemas/auth';
import { count, eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import type { Response, AuthResponse } from '@/types/response';

// Validation schema
const signUpSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Define the user type based on the returned fields
type CreatedUser = {
  id: number;
  email: string;
  avatar: string;
  emailVerified: boolean;
  createdAt: number;
  updatedAt: number;
};

// JWT utility functions
const generateTokens = (userId: number, email: string) => {
  const JWT_SECRET = process.env.JWT_SECRET!;
  const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;

  const access_token = jwt.sign(
    { userId, email },
    JWT_SECRET,
    { expiresIn: '15m' },
  );

  const refresh_token = jwt.sign(
    { userId, email },
    JWT_REFRESH_SECRET,
    { expiresIn: '7d' },
  );

  return { access_token, refresh_token };
};

export const signUp = createServerFn({ method: 'POST' })
  .validator(signUpSchema)
  .handler(async ({ data }): Promise<Response<CreatedUser | null> | AuthResponse<CreatedUser>> => {
    try {
      const { email, password } = data;

      // Check if user already exists
      const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

      if(existingUser.length > 0) {
        return {
          data: null,
          messages: [{
            message: 'User with this email already exists',
            type: 'error',
          }],
        } satisfies Response<null>;
      }

      // Check total user count to determine if this is the first user
      const userCountResult = await db
        .select({ count: count() })
        .from(users);

      const isFirstUser = userCountResult[0]?.count === 0;

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 12);

      // Create user
      const newUser = await db
        .insert(users)
        .values({
          email,
          password: hashedPassword,
          avatar: 'default', // Set default avatar since it's not in the input schema
          emailVerified: isFirstUser, // First user gets auto-verified
        })
        .returning({
          id: users.id,
          email: users.email,
          avatar: users.avatar,
          emailVerified: users.emailVerified,
          createdAt: users.createdAt,
          updatedAt: users.updatedAt,
        });

      const createdUser = newUser[0] as CreatedUser | undefined;

      // If first user, sign them in immediately
      if(createdUser && isFirstUser) {
        const tokens = generateTokens(createdUser.id, createdUser.email);

        return {
          data: createdUser,
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          messages: [{
            message: 'Welcome! Account created and signed in successfully',
            type: 'success',
          }],
        } satisfies AuthResponse<CreatedUser>;
      }

      // Regular signup - just return created user
      return {
        data: createdUser!,
        messages: [{
          message: 'Account created successfully. Please verify your email to sign in.',
          type: 'success',
        }],
      } satisfies Response<CreatedUser>;

    } catch {

      return {
        data: null,
        messages: [{
          message: 'An error occurred while creating your account. Please try again.',
          type: 'error',
        }],
      } satisfies Response<null>;
    }
  });