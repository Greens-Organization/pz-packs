import { z } from '@org/validation'

export const modIdParamSchema = z.object({
  id: z.uuid(),
})

export type ModIdParamSchema = z.infer<typeof modIdParamSchema>
