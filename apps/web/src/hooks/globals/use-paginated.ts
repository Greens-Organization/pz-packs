import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type {
  ErrorResponse,
  PaginatedResponse,
  PaginateQueryParams,
} from '@/services/dtos'

interface UsePaginatedOptions<T> {
  queryParams?: PaginateQueryParams
  queryKey: readonly unknown[]
  queryFn: (
    queryParams: PaginateQueryParams,
  ) => Promise<PaginatedResponse<T>> | Promise<ErrorResponse>
  options?: Omit<UseQueryOptions<PaginatedResponse<T>>, 'queryKey' | 'queryFn'>
}

export function usePaginated<T>({
  queryParams = {},
  queryKey,
  queryFn,
  options,
}: UsePaginatedOptions<T>): UseQueryResult<PaginatedResponse<T>> {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const result = await queryFn(queryParams)
      // Arrumar essa resposta
      if (!result.success) {
        return {
          data: [],
          pagination: {
            page: 1,
            limit: 10,
            total: 0,
            totalPages: 0,
          },
        } as PaginatedResponse<T>
      }
      return result.data as PaginatedResponse<T>
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    ...options,
  })
}
