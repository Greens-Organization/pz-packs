import { ModpackExportRepository } from '@org/database/repository'
import { RequestServerFileUseCase } from '../use-cases/request-server-file'

export function makeRequestServerFileUseCase() {
  const modpackExportRepository = new ModpackExportRepository()
  return new RequestServerFileUseCase(modpackExportRepository)
}
