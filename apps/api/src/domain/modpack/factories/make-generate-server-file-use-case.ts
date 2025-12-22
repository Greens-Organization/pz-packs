import {
  ModpackExportRepository,
  ModpackModRepository,
} from '@org/database/repository'
import { GenerateServerFileUseCase } from '../use-cases/generate-server-file'

export function makeGenerateServerFileUseCase() {
  const modpackModRepository = new ModpackModRepository()
  const modpackExportRepository = new ModpackExportRepository()
  return new GenerateServerFileUseCase(
    modpackModRepository,
    modpackExportRepository,
  )
}
