import { setHeader } from '@tanstack/react-start/server';

export function setAuthCookies(accessToken: string, refreshToken: string) {
  setHeader('Set-Cookie', [
    `access_token=${accessToken}; HttpOnly; Path=/; Max-Age=900; SameSite=Strict`,
    `refresh_token=${refreshToken}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict`,
  ]);
}