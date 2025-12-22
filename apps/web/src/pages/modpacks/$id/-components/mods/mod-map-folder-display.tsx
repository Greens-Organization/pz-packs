import { MapTrifoldIcon } from '@org/design-system/components/ui/icons'
import {
  Popover,
  PopoverContent,
  PopoverPositioner,
  PopoverTrigger,
} from '@org/design-system/components/ui/popover'
import type { IModDTO } from '@/services/mod/dtos'

export function ModMapFolderDisplay({ data }: { data: IModDTO }) {
  if (!data.mapFolders || data.mapFolders.length === 0) {
    return null
  }
  return (
    <div>
      <Popover>
        <PopoverTrigger className="text-muted-foreground text-xs flex flex-row items-center gap-1 hover:bg-muted rounded-md cursor-pointer">
          <MapTrifoldIcon className="w-4 h-4" weight="light" />
          {data.mapFolders?.length} map folders
        </PopoverTrigger>
        <PopoverPositioner>
          <PopoverContent className="overflow-y-auto space-y-2">
            <h2 className="font-medium text-muted-foreground">
              Map Folders ({data.mapFolders?.length})
            </h2>
            {data.mapFolders && data.mapFolders.length > 0 && (
              <ul className="list-disc pl-4 text-sm">
                {data.mapFolders.map((mapFolder, index) => (
                  <li key={index} className="select-all">
                    {mapFolder}
                  </li>
                ))}
              </ul>
            )}
          </PopoverContent>
        </PopoverPositioner>
      </Popover>
    </div>
  )
}
