import { useAppForm } from '@org/design-system/components/ui/form-tanstack'
import {
  type CreateModpackFormData,
  createModpackFormSchema,
} from '@org/validation/forms/modpack'
import { useEffect } from 'react'
import { TextAreaField, TextField } from '@/components/form'
import { SubmitButton } from '@/components/form/submit-button'
import { useCreateModpack } from '@/hooks'

interface CreateModpackFormProps {
  onSuccess: () => void
}

export function CreateModpackForm({ onSuccess }: CreateModpackFormProps) {
  const createModpack = useCreateModpack()
  const form = useAppForm({
    validators: {
      onSubmit: createModpackFormSchema,
    },
    onSubmit: async ({ value }: { value: CreateModpackFormData }) =>
      await createModpack.mutateAsync(value),
  })

  useEffect(() => {
    if (createModpack.isSuccess) {
      form.reset()
      onSuccess()
    }
  }, [createModpack.isSuccess])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4">
        <TextField
          form={form}
          name="name"
          label="Modpack Name *"
          placeholder="My Awesome Modpack"
          inputMode="text"
        />
        <TextAreaField
          form={form}
          name="description"
          label="Description"
          placeholder="A collection of mods for..."
          inputMode="text"
        />
        <TextField
          form={form}
          name="avatarUrl"
          label="Avatar URL"
          placeholder="https://example.com/avatar.png"
          disabled={createModpack.isPending}
          inputMode="url"
          description="Recommend an image with a square aspect ratio and a resolution of 1024px x 1024px."
        />
        <TextField
          form={form}
          name="steamUrl"
          label="Steam Workshop URL"
          placeholder="https://steamcommunity.com/..."
          disabled={createModpack.isPending}
          inputMode="url"
        />
      </div>
      <SubmitButton
        isLoading={createModpack.isPending}
        label="Create"
        loadingLabel="Creating..."
      />
    </form>
  )
}
