import type { ModRepository } from '@org/database/repository/mod-repository'

export class GetModByWorkshopIdUseCase {
  constructor(private modRepository: ModRepository) {}

  async execute(workshopId: string) {
    const mod = await this.modRepository.findByWorkshopId(workshopId)
    return mod
  }
}
