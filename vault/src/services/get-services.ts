// src/server/get-services.server.ts
import { createServerFn } from '@tanstack/react-start';
import { requireAuth } from 'vault/middleware/auth';
import type { Response } from '@/types/response';
import { HttpStatus } from '@/types/http-status';
import type { Service } from 'vault/db/schemas';
import { vaultDb as db } from 'vault/db/connection';
import { services } from 'vault/db/schemas';

export const getServices = createServerFn()
  .middleware([requireAuth])
  .handler(async (): Promise<Response<Service[]>> => {
    try {
      const rows = await db.select().from(services);

      return {
        httpCode: HttpStatus.OK,
        data: rows,
        messages: [{ message: 'Fetched services successfully', type: 'success' }],
      };
    } catch {
      return {
        httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: [],
        messages: [{ message: 'Failed to fetch services', type: 'error' }],
      };
    }
  });
