import type { ModRepository } from '@org/database/repository/mod-repository'

export class GetModUseCase {
  constructor(private modRepository: ModRepository) {}

  async execute(id: string) {
    const mod = await this.modRepository.findById(id)
    return mod
  }
}
