import { Button } from '@org/design-system/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@org/design-system/components/ui/dialog'
import type { IModDTO } from '@/services/mod/dtos'
import { SteamDescription } from './steam-description'

export function ModDetail({ data }: { data: IModDTO }) {
  return (
    <Dialog>
      <DialogTrigger className="hover:underline text-sm text-muted-foreground">
        More Info
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{data.name}</DialogTitle>
        </DialogHeader>

        <article className="overflow-y-auto w-full max-h-[70vh] pr-2">
          <SteamDescription content={data.description} />
        </article>
        <DialogClose render={<Button>Close</Button>} />
      </DialogContent>
    </Dialog>
  )
}
