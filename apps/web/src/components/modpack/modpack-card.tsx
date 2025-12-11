import { Button } from '@org/design-system/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@org/design-system/components/ui/card'
import { SteamLogoIcon } from '@org/design-system/components/ui/icons'
import { useTheme } from '@org/design-system/providers'
import { Link, useLocation, useNavigate } from '@tanstack/react-router'
import type { IModpackDTO } from '@/services/modpack/dtos'
import { ModpackVerifiedBadge } from './modpack-verified-badge'
import { ModpackVisibilityBadge } from './modpack-visibility-badge'

interface ModpackCardProps {
  data: IModpackDTO
}

export function ModpackCard({ data }: ModpackCardProps) {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 ease-in-out pt-0 justify-between"
      onClick={() =>
        navigate({
          from: '/modpacks',
          to: '/modpacks/$id',
          params: { id: data.id },
        })
      }
    >
      <div className="relative bg-primary/30 dark:bg-primary w-full h-48 min-h-48 flex items-center justify-center rounded-t-lg text-muted-foreground/20 text-4xl">
        {pathname !== '/' && (
          <ModpackVisibilityBadge
            isPublic={data.isPublic}
            className="absolute top-2 left-2"
          />
        )}
        {data.avatarUrl ? (
          <img
            src={data.avatarUrl}
            alt={data.name}
            width={48}
            height={48}
            className="w-full h-50 object-cover rounded-t-lg"
          />
        ) : (
          <img
            src={
              theme === 'light'
                ? '/brand/zumbi-danced.svg'
                : '/brand/zumbi-danced-dark.svg'
            }
            alt={data.name}
            className="h-16 opacity-80"
          />
        )}
      </div>
      <CardHeader className="flex flex-col items-start gap-4 h-full">
        <CardTitle className="flex items-center gap-2">
          <span className="truncate">{data.name}</span>
          {data.isVerified && <ModpackVerifiedBadge />}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-between border-t border-border/50 h-12">
        <span className="text-sm font-medium">
          {data.mods?.length ?? 0} mods
        </span>
        {data.steamUrl && (
          <Link to={data.steamUrl} target="_blank">
            <Button size="icon" variant="ghost">
              <SteamLogoIcon className="w-6 h-6" weight="bold" />
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
