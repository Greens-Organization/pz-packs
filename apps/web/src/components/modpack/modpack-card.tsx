import type { DModpack } from '@org/database/schemas'
import { Button } from '@org/design-system/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@org/design-system/components/ui/card'
import {
  PackageIcon,
  SteamLogoIcon,
} from '@org/design-system/components/ui/icons'
import { Separator } from '@org/design-system/components/ui/separator'
import { useTheme } from '@org/design-system/providers'
import { Link, useNavigate } from '@tanstack/react-router'

interface ModpackCardProps {
  data: DModpack
}

export function ModpackCard({ data }: ModpackCardProps) {
  const { theme } = useTheme()
  const navigate = useNavigate()
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 ease-in-out pt-0"
      onClick={() =>
        navigate({
          from: '/modpacks',
          to: '/modpacks/$id',
          params: { id: data.id },
        })
      }
    >
      {data.avatarUrl ? (
        <img
          src={data.avatarUrl}
          alt={data.name}
          width={48}
          height={48}
          className="w-full h-50 object-cover rounded-t-lg"
        />
      ) : (
        <div className="bg-primary/30 dark:bg-primary w-full h-50 flex items-center justify-center rounded-t-lg text-muted-foreground/20 text-4xl">
          <img
            src={
              theme === 'light'
                ? '/brand/zumbi-danced.svg'
                : '/brand/zumbi-danced-dark.svg'
            }
            alt={data.name}
            className="h-16 opacity-80"
          />
        </div>
      )}
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="flex flex-col gap-2">
          <CardTitle>{data.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {data.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Separator className="w-full" />
        <CardFooter className="justify-between">
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
      </CardContent>
    </Card>
  )
}
