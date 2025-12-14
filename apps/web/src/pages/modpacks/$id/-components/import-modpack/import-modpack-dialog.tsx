import { Button } from '@org/design-system/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@org/design-system/components/ui/dialog'
import { DownloadSimple } from '@org/design-system/components/ui/icons'
import { useState } from 'react'
import { ImportModpackForm } from './import-modpack-form'

interface ImportModpackDialogProps {
  modpackId: string
}

export function ImportModpackDialog({ modpackId }: ImportModpackDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="flex flex-row items-center tracking-wide"
          >
            <DownloadSimple className="w-4 h-4 mr-1" weight="bold" />
            Import from Steam
          </Button>
        }
      ></DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Import Modpack</DialogTitle>
          <DialogDescription>
            Import mods from a Steam Workshop Collection
          </DialogDescription>
        </DialogHeader>
        <ImportModpackForm
          modpackId={modpackId}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
