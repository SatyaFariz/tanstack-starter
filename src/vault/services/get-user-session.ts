// src/server/get-user-session.server.ts
import { createServerFn } from '@tanstack/react-start';
import { getHeader, setHeader } from '@tanstack/react-start/server';
import { generateTokens, verifyToken } from '../utils/jwt';

export const getUserSession = createServerFn()
  .handler(async () => {
    const cookie = getHeader('cookie');
    if(!cookie) return null;

    const getCookieValue = (name: string) =>
      cookie.split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1];

    const accessToken = getCookieValue('access_token');
    const refreshToken = getCookieValue('refresh_token');

    // 1. Try validating access token
    if(accessToken) {
      try {
        return verifyToken(accessToken);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        if(err.name !== 'TokenExpiredError') {
          return null; // invalid token
        }
        // else: expired, fall back to refresh
      }
    }

    // 2. Try refreshing with refresh token
    if(refreshToken) {
      try {
        // eslint-disable-next-line no-console
        console.log('refreshing token');
        const decoded = verifyToken(refreshToken);

        // issue new tokens (rotate refresh token)
        const tokens = generateTokens(decoded.userId, decoded.email);

        // ✅ set new cookies
        setHeader('Set-Cookie', [
          `access_token=${tokens.access_token}; HttpOnly; Path=/; Max-Age=900; SameSite=Strict`,
          `refresh_token=${tokens.refresh_token}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7}; SameSite=Strict`,
        ]);

        return decoded;
      } catch {
        return null; // refresh invalid
      }
    }

    // 3. No valid tokens
    return null;
  });
