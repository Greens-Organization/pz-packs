import { z } from '@org/validation/zod'

export const removeMemberSchema = z.object({
  email: z.email({ error: 'Invalid email format' }),
})

export type RemoveMemberSchema = z.infer<typeof removeMemberSchema>
