import {
  modpackMemberRepository,
  modpackModRepository,
  modpackRepository,
  modRepository,
  tagRepository,
} from '@org/database'
import { UpsertModFromSteamUseCase } from '@/domain/mod/use-cases/upsert-mod-from-steam'
import { steamClient } from '@/shared/steam-client'
import { ImportModpackController } from '../controllers/import-modpack.controller'
import { AddModToModpackUseCase } from '../use-cases/add-mod-to-modpack'
import { ImportModpackUseCase } from '../use-cases/import-modpack-use-case'

export function makeImportModpackController() {
  const upsertModFromSteamUseCase = new UpsertModFromSteamUseCase(
    modRepository,
    tagRepository,
    steamClient,
  )
  const addModToModpackUseCase = new AddModToModpackUseCase(
    modpackModRepository,
    upsertModFromSteamUseCase,
  )
  const importModpackUseCase = new ImportModpackUseCase(addModToModpackUseCase)

  const controller = new ImportModpackController(
    modpackRepository,
    modpackMemberRepository,
    importModpackUseCase,
  )
  return controller
}
