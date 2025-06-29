// app/routes/__root.tsx
import type { ReactNode } from 'react';
import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { getUserSession } from '@/services/auth';
import appCss from '@/styles/app.css?url';
import { queryOptions, type QueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  beforeLoad: async ({ context }) => {
    const userSession = await context.queryClient.fetchQuery(queryOptions({
      queryKey: ['auth', 'user'],
      queryFn: () => getUserSession(),
      staleTime: 5000,
    }))

    return { userSession }
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Toaster
          position="top-center"
        />
        {children}
        <Scripts />
      </body>
    </html>
  );
}