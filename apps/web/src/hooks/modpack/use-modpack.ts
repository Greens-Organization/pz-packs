import type { DModpack } from '@org/database/schemas'
import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { ModpackService } from '@/services/modpack'
import { modpackKeys } from './modpack-keys'

export function useModpack(
  id: string,
  options?: Omit<UseQueryOptions<DModpack>, 'queryKey' | 'queryFn'>,
): UseQueryResult<DModpack> {
  return useQuery({
    queryKey: modpackKeys.detail(id),
    queryFn: async () => await ModpackService.get(id),
    staleTime: 1000 * 60 * 5,
    ...options,
  })
}
