import { modRepository } from '@org/database'
import { GetModController } from '../controllers/get-mod.controller'
import { GetModUseCase } from '../use-cases/get-mod'

export function makeGetModController() {
  const useCase = new GetModUseCase(modRepository)
  const controller = new GetModController(useCase)
  return controller
}
