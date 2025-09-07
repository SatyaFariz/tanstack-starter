import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if(!context.userSession) {
      throw redirect({ to: context.usersExist ? '/signin' : '/signup' });
    }

    return { userSession: context.userSession };
  },
});

function RouteComponent() {
  const { userSession } = Route.useRouteContext();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r border-gray-200 flex flex-col">
        <div className="px-6 py-4 text-lg font-bold border-b">BizConquest</div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a href="/backend/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100">
            Dashboard
          </a>
          <a href="/backend/settings" className="block px-3 py-2 rounded hover:bg-gray-100">
            Settings
          </a>
          <a href="/backend/users" className="block px-3 py-2 rounded hover:bg-gray-100">
            Users
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-6">
          <div className="font-semibold text-gray-800">Backend Panel</div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-700">
              <div className="font-medium">{userSession.email}</div>
              <div className="text-gray-500 text-xs">ID: {userSession.userId}</div>
            </div>
            <img
              src={`https://api.dicebear.com/7.x/identicon/svg?seed=${userSession.email}`}
              alt="avatar"
              className="w-8 h-8 rounded-full border"
            />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
