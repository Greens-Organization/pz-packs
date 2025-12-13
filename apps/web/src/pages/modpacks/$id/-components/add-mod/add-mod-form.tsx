import { useAppForm } from '@org/design-system/components/ui/form-tanstack'
import { useEffect } from 'react'
import { SubmitButton, TextField } from '@/components/form'
import { useAddModpackMember } from '@/hooks'

interface AddModFormProps {
  onSuccess: () => void
  modpackId: string
}

export function AddModForm({ onSuccess, modpackId }: AddModFormProps) {
  const addMod = useAddModpackMod()
  const form = useAppForm({
    defaultValues: {
      email: '',
    },
    validators: {
      onSubmit: addModFormSchema,
    },
    onSubmit: async ({ value }) =>
      await addMember.mutateAsync({
        modpackId,
        email: value.email,
      }),
  })

  useEffect(() => {
    if (addMember.isSuccess) {
      form.reset()
      onSuccess()
    }
  }, [addMember.isSuccess])

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
        name="modAtribute"
        label="Mod ID or Steam URL *"
        placeholder="123456 or https://steamcommunity.com/sharedfiles/filedetails/?id=123456"
        inputMode="email"
        disabled={addMember.isPending}
      />

      <SubmitButton
        isLoading={addMember.isPending}
        label="Add Member"
        loadingLabel="Adding.."
      />
    </form>
  )
}
