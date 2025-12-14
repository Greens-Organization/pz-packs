import { useAppForm } from '@org/design-system/components/ui/form-tanstack'
import { importModpackSchema } from '@org/validation/forms/modpack/import-modpack.schema'
import { useEffect } from 'react'
import { SubmitButton, TextField } from '@/components/form'
import { useImportModpack } from '@/hooks/modpack/use-import-modpack'

interface ImportModpackFormProps {
  onSuccess: () => void
  modpackId: string
}

export function ImportModpackForm({
  onSuccess,
  modpackId,
}: ImportModpackFormProps) {
  const importModpack = useImportModpack()
  const form = useAppForm({
    defaultValues: {
      steamUrl: '',
    },
    validators: {
      onSubmit: importModpackSchema,
    },
    onSubmit: async ({ value }) =>
      await importModpack.mutateAsync({
        modpackId,
        steamUrl: value.steamUrl,
      }),
  })

  useEffect(() => {
    if (importModpack.isSuccess) {
      form.reset()
      onSuccess()
    }
  }, [importModpack.isSuccess])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="space-y-4"
    >
      <TextField
        form={form}
        name="steamUrl"
        label="Steam Collection URL *"
        placeholder="Enter the Steam Collection URL"
        inputMode="url"
        disabled={importModpack.isPending}
      />

      <SubmitButton
        isLoading={importModpack.isPending}
        label="Import Modpack"
        loadingLabel="Importing.."
      />
    </form>
  )
}
