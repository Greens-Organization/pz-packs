import type {
  CreateModpackData,
  ModpackRepository,
} from '@org/database/repository/modpack-repository'

export class CreateModpackUseCase {
  constructor(private modpackRepository: ModpackRepository) {}

  async execute(data: CreateModpackData) {
    const exists = await this.modpackRepository.findByName(data.name)
    if (exists) {
      throw new Error('Modpack with this name already exists')
    }
    return await this.modpackRepository.create(data)
  }
}
