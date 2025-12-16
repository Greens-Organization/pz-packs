import { RowsIcon } from '@org/design-system/components/ui/icons'
import {
  Popover,
  PopoverContent,
  PopoverPositioner,
  PopoverTrigger,
} from '@org/design-system/components/ui/popover'
import type { IModDTO } from '@/services/mod/dtos'

export function ModIdsDisplay({ data }: { data: IModDTO }) {
  return (
    <div>
      <Popover>
        <PopoverTrigger
          disabled={!data.steamModId || data.steamModId.length === 0}
          className="text-muted-foreground text-xs flex flex-row items-center gap-1 hover:bg-muted rounded-md cursor-pointer"
        >
          <RowsIcon className="w-4 h-4" weight="light" />
          {data.steamModId?.length} mod IDs
        </PopoverTrigger>
        <PopoverPositioner>
          <PopoverContent className="overflow-y-auto space-y-2">
            <h2 className="font-medium text-muted-foreground">
              Mod IDs ({data.steamModId?.length})
            </h2>
            {data.steamModId && data.steamModId.length > 0 && (
              <ul className="list-disc pl-4 text-sm">
                {data.steamModId.map((mapFolder, index) => (
                  <li key={index}>{mapFolder}</li>
                ))}
              </ul>
            )}
          </PopoverContent>
        </PopoverPositioner>
      </Popover>
    </div>
  )
}
