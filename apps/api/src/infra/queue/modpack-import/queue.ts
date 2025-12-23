import { appQueue } from '../instance'

export const MODPACK_IMPORT_QUEUE_NAME = appQueue.name

export const modpackImportQueue = appQueue

export interface ModpackImportJobData {
  modpackId: string
  steamUrl: string
  userId: string // Para notificar o usuário depois, se necessário
}
