import z from 'zod'

export const VersionPZ = ['41x', '42x'] as const

export const exportModpackFormSchema = z.object({
  version: z.enum(VersionPZ, 'Please select a valid version'),
})

export type ExportModpackFormData = z.infer<typeof exportModpackFormSchema>
