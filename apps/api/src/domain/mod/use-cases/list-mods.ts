import type {
  ListModsParams,
  ModRepository,
} from '@org/database/repository/mod-repository'

export class ListModsUseCase {
  constructor(private modRepository: ModRepository) {}

  async execute(params: ListModsParams) {
    return await this.modRepository.findAll(params)
  }
}
