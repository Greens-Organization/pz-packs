import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@org/design-system/components/ui/card'
import { useTheme } from '@org/design-system/providers'
import { useLocation, useNavigate } from '@tanstack/react-router'
import type { IModDTO } from '@/services/mod/dtos'

interface ModpackCardProps {
  data: IModDTO
}

export function ModCard({ data }: ModpackCardProps) {
  const { theme } = useTheme()
  const navigate = useNavigate()

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
      <div className="relative bg-primary/30 dark:bg-primary aspect-square h-40 flex items-center justify-center rounded-l-lg text-muted-foreground/20 text-4xl overflow-clip">
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
      <div className="grid grid-rows-[1fr_2rem] w-full pt-4 px-4 pb-1">
        <CardHeader className="flex flex-col items-start gap-2 px-0">
          <div className="flex flex-row items-center gap-2">
            <CardTitle>{data.name}</CardTitle>
          </div>
          {data.description && (
            <CardDescription className="line-clamp-2">
              {data.description}
            </CardDescription>
          )}
        </CardHeader>
      </div>
    </Card>
  )
}
