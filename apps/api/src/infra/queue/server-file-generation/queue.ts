import { appQueue } from '../instance'

export const SERVER_FILE_GENERATION_QUEUE_NAME = appQueue.name

export interface ServerFileGenerationJobData {
  exportId: string
  userId: string
  modpackId: string
}

export const serverFileGenerationQueue = appQueue
