import { GetServerFileController } from '../controllers/get-server-file.controller'
import { makeGetServerFileUseCase } from './make-get-server-file-use-case'

export function makeGetServerFileController() {
  const useCase = makeGetServerFileUseCase()
  return new GetServerFileController(useCase)
}
