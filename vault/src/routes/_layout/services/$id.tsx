import { createFileRoute } from '@tanstack/react-router';
import * as React from 'react';
import { useParams } from '@tanstack/react-router';
import { getServiceById } from 'vault/services/get-service-by-id';
import type { ServiceWithEnvironments } from 'vault/services/get-service-by-id';
import { useQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/_layout/services/$id')({
  component: RouteComponent,
  // 👇 loader not needed anymore
});

function RouteComponent() {
  const { id } = useParams({ from: '/_layout/services/$id' });
  const serviceId = Number(id);

  // React Query fetch
  const { data: service, isLoading, isError } = useQuery({
    queryKey: ['service', serviceId],
    queryFn: async (): Promise<ServiceWithEnvironments> => {
      const res = await getServiceById({
        data: { id: serviceId },
      }); // use normal fetcher
      if(res.httpCode !== 200 || !res.data) {
        throw new Error('Service not found');
      }
      return res.data;
    },
  });

  const [activeTab, setActiveTab] = React.useState<number | null>(null);

  React.useEffect(() => {
    if(service?.environments?.[0]) {
      setActiveTab(service.environments[0].id);
    }
  }, [service]);

  if(isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  if(isError || !service) {
    return <div className="p-6 text-red-500">Failed to load service.</div>;
  }

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">{service.name}</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <nav className="-mb-px flex space-x-4">
          {service.environments.map((env) => (
            <button
              key={env.id}
              onClick={() => setActiveTab(env.id)}
              className={`px-3 py-2 font-medium text-sm border-b-2 ${
                activeTab === env.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {env.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {service.environments.map(
          (env) =>
            activeTab === env.id && (
              <div key={env.id}>
                <p className="text-gray-500 italic">No content yet for {env.name}.</p>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
