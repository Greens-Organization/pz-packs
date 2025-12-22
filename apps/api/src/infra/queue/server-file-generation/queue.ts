import { Queue } from 'bullmq'
import { connection } from '../connection'

export const SERVER_FILE_GENERATION_QUEUE_NAME = 'server-file-generation'

export interface ServerFileGenerationJobData {
  exportId: string
  userId: string
  modpackId: string
}

export const serverFileGenerationQueue = new Queue<ServerFileGenerationJobData>(
  SERVER_FILE_GENERATION_QUEUE_NAME,
  {
    connection,
  },
)
