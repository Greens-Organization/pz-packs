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
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 ease-in-out py-0 justify-between flex-row gap-0"
      onClick={() =>
        navigate({
          from: '/modpacks',
          to: '/modpacks/$id',
          params: { id: data.id },
        })
      }
    >
      <div className="relative bg-primary/30 dark:bg-primary min-w-40 h-full min-h-48 flex items-center justify-center rounded-l-lg text-muted-foreground/20 text-4xl">
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
      <div className="flex flex-col gap-2 w-full justify-between p-4">
        <CardHeader className="flex flex-col items-start gap-4 px-0">
          <div>
            <CardTitle className="flex items-center gap-2">
              {data.name}
            </CardTitle>
            {data.isVerified && <ModpackVerifiedBadge />}
          </div>
          <CardDescription className="line-clamp-2">
            {data.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="px-0 justify-between">
          {data.steamUrl && (
            <Link to={data.steamUrl} target="_blank" className="z-10">
              <Button size="icon" variant="ghost">
                <SteamLogoIcon className="w-6 h-6" weight="bold" />
              </Button>
            </Link>
          )}

          <span className="text-sm font-medium only:ml-auto">
            {data.mods?.length ?? 0} mods
          </span>
        </CardFooter>
      </div>
    </Card>
  )
}
