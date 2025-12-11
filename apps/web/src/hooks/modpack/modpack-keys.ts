import type { PaginateQueryParams } from '@/services/dtos'

export const modpackKeys = {
  all: ['modpacks'] as const,
  lists: () => [...modpackKeys.all, 'list'] as const,
  list: (queryParams: PaginateQueryParams) =>
    [...modpackKeys.lists(), queryParams] as const,
  listPublics: () => [...modpackKeys.lists(), 'public'] as const,
  listPublic: (queryParams: PaginateQueryParams) =>
    [...modpackKeys.listPublics(), queryParams] as const,
  listMys: () => [...modpackKeys.lists(), 'my'] as const,
  listMy: (queryParams: PaginateQueryParams) =>
    [...modpackKeys.listMys(), queryParams] as const,
  details: () => [...modpackKeys.all, 'detail'] as const,
  detail: (id: string) => [...modpackKeys.details(), id] as const,
  membersLists: () => [...modpackKeys.all, 'members'] as const,
  members: (modpackId: string) =>
    [...modpackKeys.membersLists(), modpackId] as const,
}
