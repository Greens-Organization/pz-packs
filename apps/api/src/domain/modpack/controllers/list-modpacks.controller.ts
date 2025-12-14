import { ApiResponse } from '@/utils'
import type { ListModpacksUseCase } from '../use-cases/list-modpacks'
import type { ListModpacksQuerySchema } from '../validations'

interface ListModpacksControllerParams {
  query: ListModpacksQuerySchema
}

export class ListModpacksController {
  constructor(private listModpacksUseCase: ListModpacksUseCase) {}

  async handle({ query }: ListModpacksControllerParams) {
    const result = await this.listModpacksUseCase.execute({
      page: query.page,
      limit: query.limit,
      search: query.search,
      sortBy: query.sortBy,
      sortOrder: query.sortOrder,
    })

    return new ApiResponse(result, 200)
  }
}
