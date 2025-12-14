import { modRepository } from '@org/database'
import { ListModsController } from '../controllers/list-mods.controller'
import { ListModsUseCase } from '../use-cases/list-mods'

export function makeListModsController() {
  const useCase = new ListModsUseCase(modRepository)
  const controller = new ListModsController(useCase)
  return controller
}
