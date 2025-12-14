import { z } from '@org/validation'

export const modIdParamSchema = z.object({
  id: z.uuid(),
})

export const modWorkshopIdParamSchema = z.object({
  workshopId: z.string(),
})

export type ModIdParamSchema = z.infer<typeof modIdParamSchema>
export type ModWorkshopIdParamSchema = z.infer<typeof modWorkshopIdParamSchema>
