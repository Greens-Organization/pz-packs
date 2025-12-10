import { Button } from '@org/design-system/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@org/design-system/components/ui/dialog'
import { PencilIcon } from '@org/design-system/components/ui/icons'
import { toast } from '@org/design-system/components/ui/sonner'
import type { UpdateModpackFormData } from '@org/validation/forms/modpack'
import { useState } from 'react'
import { useUpdateModpack } from '@/hooks/modpack'
import type { ModpackWithMembers } from '@/services/modpack/get-modpack-details.service'
import { UpdateModpackForm } from './update-modpack-form'

interface UpdateModpackFormProps {
  modpackId: string
  modpack: ModpackWithMembers
}

export function UpdateModpackDialog({
  modpackId,
  modpack,
}: UpdateModpackFormProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const updateModpack = useUpdateModpack()

  const handleUpdateSubmit = async (data: UpdateModpackFormData) => {
    const result = await updateModpack.mutateAsync({
      id: modpackId,
      data: {
        name: data.name,
        description: data.description,
        avatarUrl: data.avatarUrl,
        steamUrl: data.steamUrl,
        isPublic: data.isPublic,
      },
    })

    if (!result.success) {
      toast.error(result.error.message ?? 'Failed to create modpack')
      return
    }

    toast.success('Modpack updated successfully')
    setEditDialogOpen(false)
  }

  return (
    <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
      <DialogTrigger
        render={
          <Button size="icon" className="w-fit h-fit">
            <PencilIcon className="mr-2 h-4 w-4" weight="bold" />
            Edit
          </Button>
        }
      />
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Modpack</DialogTitle>
          <DialogDescription>Update your modpack information</DialogDescription>
        </DialogHeader>
        <UpdateModpackForm
          defaultValues={{
            name: modpack.name,
            description: modpack.description || '',
            avatarUrl: modpack.avatarUrl || '',
            steamUrl: modpack.steamUrl || '',
          }}
          onSubmit={handleUpdateSubmit}
          isLoading={updateModpack.isPending}
          submitText="Save Changes"
        />
      </DialogContent>
    </Dialog>
  )
}
