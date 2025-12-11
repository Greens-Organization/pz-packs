import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import type { PaginatedResponse, PaginateQueryParams } from '@/services/dtos'
import { ModpackService } from '@/services/modpack'
import type { IModpackDTO } from '@/services/modpack/dtos'
import { usePaginated } from '../globals'
import { modpackKeys } from './modpack-keys'

export function useListMyModpacks(
  queryParams: PaginateQueryParams = {},
  options?: Omit<
    UseQueryOptions<PaginatedResponse<IModpackDTO>>,
    'queryKey' | 'queryFn'
  >,
): UseQueryResult<PaginatedResponse<IModpackDTO>> {
  return usePaginated<IModpackDTO>({
    queryParams,
    queryKey: modpackKeys.myLists(queryParams),
    queryFn: ModpackService.listMyModpacks,
    options,
  })
}
