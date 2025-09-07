/* eslint-disable @typescript-eslint/no-unused-vars */
import { createFileRoute } from '@tanstack/react-router';
import * as React from 'react';
import { getServiceById } from 'vault/services/get-service-by-id';
import type { ServiceWithEnvironments } from 'vault/services/get-service-by-id';
import { useQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/_layout/services/$id')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      env: typeof search.env === 'string' ? search.env : undefined,
    };
  },
  // 👇 loader not needed anymore
});

type Search = {
  env?: string;
};

function RouteComponent() {
  const { id } = Route.useParams();
  const { env } = Route.useSearch();
  const navigate = Route.useNavigate();

  const serviceId = Number(id);

  // Fetch service + environments
  const { data: service, isLoading, isError } = useQuery({
    queryKey: ['service', serviceId],
    queryFn: async (): Promise<ServiceWithEnvironments> => {
      const res = await getServiceById({ data: { id: serviceId } });
      if(res.httpCode !== 200 || !res.data) {
        throw new Error('Service not found');
      }
      return res.data;
    },
  });

  // Determine active environment
  React.useEffect(() => {
    if(!service) return;

    const envNames = service.environments.map((e) => e.name);
    if(!env) {
      // default to first env (development)
      navigate({
        search: (prev: Search) => ({ ...prev, env: envNames[0] }),
        replace: true,
      });
    } else if(!envNames.includes(env)) {
      // invalid → remove
      navigate({
        search: (prev: Search) => {
          const { env: _, ...rest } = prev;
          return rest;
        },
        replace: true,
      });
    }
  }, [env, service, navigate]);

  if(isLoading) return <div className="p-6">Loading...</div>;
  if(isError || !service) return <div className="p-6 text-red-500">Failed to load service.</div>;

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">{service.name}</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <nav className="-mb-px flex space-x-4">
          {service.environments.map((environment) => (
            <button
              key={environment.id}
              onClick={() =>
                navigate({
                  search: (prev: Search) => ({ ...prev, env: environment.name }),
                })
              }
              className={`px-3 py-2 font-medium text-sm border-b-2 ${
                env === environment.name
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {environment.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {service.environments.map(
          (environment) =>
            env === environment.name && (
              <div key={environment.id}>
                <p className="text-gray-500 italic">
                  No content yet for {environment.name}.
                </p>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
