// src/server/logout.server.ts
import { createServerFn } from '@tanstack/react-start';
import { clearAuthCookies } from 'vault/utils/cookies';
import type { BaseResponse } from '@/types/response';
import { HttpStatus } from '@/types/http-status';

export const logout = createServerFn({ method: 'POST' })
  .handler(async () => {
    clearAuthCookies();

    return {
      httpCode: HttpStatus.OK,
      messages: [
        {
          type: 'success',
          message: 'Logged out successfully',
        },
      ],
    } satisfies BaseResponse;
  });
