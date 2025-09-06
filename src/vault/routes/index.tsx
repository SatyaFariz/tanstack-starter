// app/routes/index.tsx

import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
  beforeLoad: async ({ context }) => {
    if(!context.userSession) {
      throw redirect({ to: '/signup' });
    }
  },
});

function Home() {
  return (
    <div className="flex items-center justify-center h-dvh p-6">
      Vault
    </div>
  );
}