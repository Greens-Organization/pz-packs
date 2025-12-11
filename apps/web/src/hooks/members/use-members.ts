import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { IMemberDTO } from '@/services/modpack/dtos'
import { MembersService } from '@/services/modpack/members'
import { memberKeys } from './members-keys'

export function useMembers(
  modpackId: string,
  options?: Omit<UseQueryOptions<IMemberDTO[]>, 'queryKey' | 'queryFn'>,
): UseQueryResult<IMemberDTO[]> {
  return useQuery({
    queryKey: memberKeys.get(modpackId),
    queryFn: async () => await MembersService.list(modpackId),
    enabled: !!modpackId,
    ...options,
  })
}
