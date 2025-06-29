import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/backend/_layout')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (!context.userSession) {
      throw redirect({ to: '/' })
    }
  },
})

function RouteComponent() {
  return <div>Hello "/backend/_layout"!</div>
}
