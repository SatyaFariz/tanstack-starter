import jwt from 'jsonwebtoken';

type JWTPayload = { userId: number; email: string };

// JWT utility
export const generateTokens = (userId: number, email: string) => {
  const { JWT_SECRET, JWT_REFRESH_SECRET } = process.env;

  if(!JWT_SECRET || !JWT_REFRESH_SECRET) {
    throw new Error('JWT secrets (JWT_SECRET, JWT_REFRESH_SECRET) must be set in env');
  }

  const access_token = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '15m' });
  const refresh_token = jwt.sign({ userId, email }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

  return { access_token, refresh_token };
};

export function verifyAccessToken(token: string): JWTPayload {
  return jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
}

export function verifyRefreshToken(token: string): JWTPayload {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as JWTPayload;
}