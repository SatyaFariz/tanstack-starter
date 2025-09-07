// src/server/get-environments.server.ts
import { createServerFn } from '@tanstack/react-start';
import { vaultDb as db } from 'vault/db/connection';
import { environments, type Environment } from 'vault/db/schemas';
import type { Response } from '@/types/response';
import { HttpStatus } from '@/types/http-status';
import { requireAuth } from 'vault/middleware/auth';

export const getEnvironments = createServerFn()
  .middleware([requireAuth])
  .handler(async (): Promise<Response<Environment[]>> => {
    try {
      const rows = await db
        .select()
        .from(environments)
        .orderBy(environments.id);

      return {
        httpCode: HttpStatus.OK,
        data: rows,
        messages: [{ message: 'Fetched environments successfully', type: 'success' }],
      };
    } catch {
      return {
        httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: [],
        messages: [{ message: 'Failed to fetch environments', type: 'error' }],
      };
    }
  });
