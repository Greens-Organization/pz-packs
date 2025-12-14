import { modRepository } from '@org/database'
import { GetModByWorkshopIdController } from '../controllers/get-mod-by-workshop-id.controller'
import { GetModByWorkshopIdUseCase } from '../use-cases/get-mod-by-workshop-id'

export function makeGetModByWorkshopIdController() {
  const useCase = new GetModByWorkshopIdUseCase(modRepository)
  const controller = new GetModByWorkshopIdController(useCase)
  return controller
}
