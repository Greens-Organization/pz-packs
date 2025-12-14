import { modpackRepository } from '@org/database'
import { ListModpacksController } from '../controllers/list-modpacks.controller'
import { ListModpacksUseCase } from '../use-cases/list-modpacks'

export function makeListModpacksController() {
  const useCase = new ListModpacksUseCase(modpackRepository)
  const controller = new ListModpacksController(useCase)
  return controller
}
