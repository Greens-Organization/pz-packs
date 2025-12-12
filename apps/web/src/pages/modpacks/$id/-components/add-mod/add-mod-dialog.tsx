import { Button } from '@org/design-system/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@org/design-system/components/ui/dialog'
import { PlusSquareIcon } from '@org/design-system/components/ui/icons'
import { useState } from 'react'
import type { IModpackDTO } from '@/services/modpack/dtos'
import { UpdateModpackForm } from '../update/update-modpack-form'

interface AddModDialogProps {
  modpack: IModpackDTO
}

export function AddModDialog({ modpack }: AddModDialogProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false)

  return (
    <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
      <DialogTrigger
        render={
          <Button>
            <PlusSquareIcon className="w-5 h-5 mr-2" weight="bold" />
            Add Mod
          </Button>
        }
      />
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Mod</DialogTitle>
          <DialogDescription>Update your modpack information</DialogDescription>
        </DialogHeader>
        <UpdateModpackForm
          modpack={modpack}
          onSuccess={() => setEditDialogOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
