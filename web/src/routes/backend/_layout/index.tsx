import { useLogoutMutation } from '@/hooks/useLogoutMutation'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/backend/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  const logoutMutation = useLogoutMutation();
  return (
      <div>
        <button onClick={() => logoutMutation.mutate()}>Logout</button>
      </div>
  )
}
