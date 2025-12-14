import { modpackRepository } from '@org/database'
import { CreateModpackController } from '../controllers/create-modpack.controller'
import { CreateModpackUseCase } from '../use-cases/create-modpack'

export function makeCreateModpackController() {
  const useCase = new CreateModpackUseCase(modpackRepository)
  const controller = new CreateModpackController(useCase)
  return controller
}
