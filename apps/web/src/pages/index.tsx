import { z } from '@org/validation'
import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from './-components/home-page'

const publicModpacksSearchSchema = z.object({
  page: z.coerce.number().int().positive().catch(1).default(1),
  limit: z.coerce.number().int().positive().max(100).catch(33).default(33),
  search: z.string().optional().catch(undefined),
  sortBy: z
    .enum(['createdAt', 'updatedAt', 'name'])
    .catch('updatedAt')
    .default('updatedAt'),
  sortOrder: z.enum(['asc', 'desc']).catch('desc').default('desc'),
})

export type PublicModpacksFiltersSchema = z.infer<
  typeof publicModpacksSearchSchema
>

export const Route = createFileRoute('/')({
  validateSearch: publicModpacksSearchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  return <HomePage />
}
