// src/server/get-service-by-id.server.ts
import { createServerFn } from '@tanstack/react-start';
import { requireAuth } from 'vault/middleware/auth';
import { HttpStatus } from '@/types/http-status';
import type { Response } from '@/types/response';
import type { Service, Environment } from 'vault/db/schemas';
import { vaultDb as db } from 'vault/db/connection';
import { services, environments } from 'vault/db/schemas';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

export type ServiceWithEnvironments = Service & { environments: Environment[] };

// 👇 define input schema
const inputSchema = z.object({
  id: z.number(),
});

export const getServiceById = createServerFn()
  .validator((data): { id: number } => {
    // use Zod to validate at runtime
    return inputSchema.parse(data);
  })
  .middleware([requireAuth])
  .handler(async ({ data }): Promise<Response<ServiceWithEnvironments | null>> => {
    const { id } = data;

    try {
      const svc = await db
        .select()
        .from(services)
        .where(eq(services.id, id))
        .get();

      if(!svc) {
        return {
          httpCode: HttpStatus.NOT_FOUND,
          data: null,
          messages: [{ message: 'Service not found', type: 'error' }],
        };
      }

      const envs = await db.select().from(environments);

      return {
        httpCode: HttpStatus.OK,
        data: { ...svc, environments: envs },
        messages: [{ message: 'Fetched service successfully', type: 'success' }],
      };
    } catch {
      return {
        httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        messages: [{ message: 'Failed to fetch service', type: 'error' }],
      };
    }
  });
