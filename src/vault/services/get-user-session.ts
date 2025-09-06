// src/server/get-user-session.server.ts
import { createServerFn } from '@tanstack/react-start';
import { getHeader } from '@tanstack/react-start/server';
import jwt from 'jsonwebtoken';

type JWTPayload = { userId: number; email: string };

export const getUserSession = createServerFn()
  .handler(async () => {
    const cookie = getHeader('cookie');
    if(!cookie) return null;

    const token = cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];

    if(!token) return null;

    try {
      return jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
    } catch {
      return null;
    }
  });
