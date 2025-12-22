import type { IModpackDTO } from '@/services/modpack/dtos'
import { ModpackCard } from './modpack-card'

interface ModpackGridProps {
  modpacks: IModpackDTO[]
  isLoading?: boolean
  emptyMessage?: string
}

export function ModpackGrid({
  modpacks,
  isLoading = false,
  emptyMessage = 'No modpacks found',
}: ModpackGridProps) {
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

  if (modpacks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground font-semibold">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modpacks.map((modpack) => (
        <ModpackCard key={modpack.id} data={modpack} />
      ))}
    </div>
  )
}
