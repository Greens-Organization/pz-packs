import { useAppForm } from '@org/design-system/components/ui/form-tanstack'
import { exportModpackFormSchema } from '@org/validation/forms/modpack/export-modpack.schema'
import { useEffect } from 'react'
import { SubmitButton } from '@/components/form'
import { SelectField } from '@/components/form/select-field'
import { useExportModpack } from '@/hooks/modpack/use-export-modpack'
import type { VersionPZ } from '@/types'

interface ExportModpackFormProps {
  modpackId: string
  onSuccess?: () => void
}

export function ExportModpackForm({
  modpackId,
  onSuccess = () => {},
}: ExportModpackFormProps) {
  const exportModpack = useExportModpack()
  const form = useAppForm({
    defaultValues: {
      version: '42x',
    },
    validators: {
      onSubmit: exportModpackFormSchema,
    },
    onSubmit: async ({ value }) =>
      await exportModpack.mutateAsync({
        modpackId,
        version: value.version as VersionPZ,
      }),
  })

  useEffect(() => {
    if (exportModpack.isSuccess) {
      form.reset()
      onSuccess()
    }
  }, [exportModpack.isSuccess])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="space-y-4"
    >
      <SelectField
        form={form}
        name="version"
        label="Version"
        placeholder="Select a version"
        disabled={exportModpack.isPending}
        options={[
          { label: 'Build 42.x', value: '42x' },
          { label: 'Build 41.x', value: '41x' },
        ]}
      />

      <SubmitButton
        isLoading={exportModpack.isPending}
        label="Export"
        loadingLabel="Exporting..."
      />
    </form>
  )
}
