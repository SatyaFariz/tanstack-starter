import { QueryClient } from '@tanstack/react-query';
import { createRouter as createTanStackRouter, type AnyRouter } from '@tanstack/react-router';
import { routerWithQueryClient, type ValidateRouter } from '@tanstack/react-router-with-query';
import { routeTree } from './routeTree.gen';

export function createRouter() {
  const queryClient = new QueryClient();
  const context = { queryClient };

  return routerWithQueryClient<ValidateRouter<AnyRouter>>(
    createTanStackRouter({
      routeTree,
      context,
      defaultPreload: 'intent',
      defaultErrorComponent: () => <div>An error occurred</div>,
      defaultNotFoundComponent: () => <div>Not found</div>,
    }),
    queryClient,
  );
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}