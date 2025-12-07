import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/modpacks/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/modpacks/"!</div>
}
