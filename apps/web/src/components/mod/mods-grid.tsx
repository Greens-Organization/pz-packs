import type { DModpack } from '@org/database/schemas'
import { ModCard } from './mod-card'

interface ModsGridProps {
  mods: DModpack[]
  isLoading?: boolean
  emptyMessage?: string
}

export function ModsGrid({
  mods,
  isLoading = false,
  emptyMessage = 'No mods found',
}: ModsGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`skeleton-${i}`}
            className="h-48 bg-muted animate-pulse rounded-lg"
          />
        ))}
      </div>
    )
  }

  if (mods.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground font-semibold">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mods.map((mod) => (
        <ModCard key={mod.id} data={mod} />
      ))}
    </div>
  )
}
