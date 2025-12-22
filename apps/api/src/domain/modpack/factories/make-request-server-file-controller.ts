import { RequestServerFileController } from '../controllers/request-server-file.controller'
import { makeRequestServerFileUseCase } from './make-request-server-file-use-case'

export function makeRequestServerFileController() {
  const useCase = makeRequestServerFileUseCase()
  return new RequestServerFileController(useCase)
}
