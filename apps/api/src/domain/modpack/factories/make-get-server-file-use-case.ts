import { ModpackExportRepository } from '@org/database/repository'
import { GetServerFileUseCase } from '../use-cases/get-server-file'

export function makeGetServerFileUseCase() {
  const modpackExportRepository = new ModpackExportRepository()
  return new GetServerFileUseCase(modpackExportRepository)
}
