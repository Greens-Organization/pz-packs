import type { PaginateQueryParams } from '@/services/dtos'

export const modpackKeys = {
  all: ['modpacks'] as const,
  publicLists: (queryParams: PaginateQueryParams) =>
    [...modpackKeys.all, 'public-modpacks', queryParams] as const,
  myLists: (queryParams: PaginateQueryParams) =>
    [...modpackKeys.all, 'my-modpacks', queryParams] as const,
  get: (id: string) => [...modpackKeys.all, id] as const,
}
