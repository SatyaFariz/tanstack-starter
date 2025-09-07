import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if(!context.userSession) {
      throw redirect({ to: context.usersExist ? '/signin' : '/signup' });
    }
  },
});

function RouteComponent() {
  return (
    <div>Hello "/backend/_layout"!
      <Outlet/>
    </div>
  );
}
