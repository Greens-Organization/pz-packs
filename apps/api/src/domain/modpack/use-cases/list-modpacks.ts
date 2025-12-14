import type {
  ModpackRepository,
  PaginationParams,
} from '@org/database/repository/modpack-repository'

export class ListModpacksUseCase {
  constructor(private modpackRepository: ModpackRepository) {}

  async execute(params: PaginationParams) {
    return await this.modpackRepository.findPublicPaginated(params)
  }
}
