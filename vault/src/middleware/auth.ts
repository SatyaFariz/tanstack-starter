// src/server/auth-middleware.server.ts
import { createMiddleware } from '@tanstack/react-start';
import { getUserSession } from 'vault/services/get-user-session';
import { HttpStatus } from '@/types/http-status';

export const requireAuth = createMiddleware({ type: 'function' })
  .server(async ({ next }) => {
    const user = await getUserSession();

    if(!user) {
      throw new Response(
        JSON.stringify({
          httpCode: HttpStatus.UNAUTHORIZED,
          data: null,
          messages: [{ message: 'Unauthorized', type: 'error' }],
        }),
        { status: HttpStatus.UNAUTHORIZED },
      );
    }

    return next({ context: { user } });
  });
