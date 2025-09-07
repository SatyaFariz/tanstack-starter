import { createServerFn } from '@tanstack/react-start';
import { requireAuth } from 'vault/middleware/auth';
import type { Response } from '@/types/response';
import { HttpStatus } from '@/types/http-status';
import type { Service, Environment } from 'vault/db/schemas';
import { vaultDb as db } from 'vault/db/connection';
import { services, environments } from 'vault/db/schemas';
import { eq } from 'drizzle-orm';

export type ServiceWithEnvironments = Service & { environments: Environment[] };

export const getServiceById = createServerFn()
  .validator((data: unknown): { id: number } => {
    if(
      typeof data !== 'object' ||
      data === null ||
      !('id' in data) ||
      typeof data.id !== 'number'
    ) {
      throw new Error('Invalid data: expected { id: number }');
    }
    return data as { id: number };
  })
  .middleware([requireAuth])
  .handler(async ({ data }): Promise<Response<ServiceWithEnvironments | null>> => {
    const { id } = data;

    try {
      const svcRows = await db.select().from(services).where(eq(services.id, id));
      const service = svcRows[0] as Service | undefined;
      if(!service) {
        return {
          httpCode: HttpStatus.NOT_FOUND,
          data: null,
          messages: [{ message: 'Service not found', type: 'error' }],
        };
      }

      const envRows = await db.select().from(environments);

      return {
        httpCode: HttpStatus.OK,
        data: { ...service, environments: envRows },
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
