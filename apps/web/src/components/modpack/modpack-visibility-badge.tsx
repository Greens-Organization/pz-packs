import { Badge } from '@org/design-system/components/ui/badge'
import { cn } from '@org/design-system/lib/utils'

export function ModpackVisibilityBadge({
  isPublic,
  className,
}: {
  isPublic: boolean
  className?: string
}) {
  if (isPublic)
    return (
      <Badge
        variant="outline"
        size="sm"
        className={cn('bg-background/40', className)}
      >
        Public
      </Badge>
    )

  return (
    <Badge variant="solid" size="sm" className={className}>
      Private
    </Badge>
  )
}
