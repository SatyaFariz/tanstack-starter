import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/backend/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/backend/_layout/"!</div>
}
