import { Worker } from 'bullmq'
import { makeGenerateServerFileUseCase } from '@/domain/modpack/factories/make-generate-server-file-use-case'
import { connection } from '../connection'
import { notificationQueue } from '../notification/queue'
import {
  SERVER_FILE_GENERATION_QUEUE_NAME,
  type ServerFileGenerationJobData,
} from './queue'

export const serverFileGenerationWorker =
  new Worker<ServerFileGenerationJobData>(
    SERVER_FILE_GENERATION_QUEUE_NAME,
    async (job) => {
      console.log(
        `[ServerFileGenerationWorker] Processing job ${job.id} for export ${job.data.exportId}`,
      )

      try {
        const generateServerFileUseCase = makeGenerateServerFileUseCase()
        await generateServerFileUseCase.execute(job.data.exportId)

        console.log(`[ServerFileGenerationWorker] Job ${job.id} completed.`)

        // Notify success
        await notificationQueue.add('server-file-ready', {
          userId: job.data.userId,
          title: 'Server File Ready',
          content: 'Your server configuration file is ready for download.',
          type: 'success',
          metadata: JSON.stringify({
            exportId: job.data.exportId,
            modpackId: job.data.modpackId,
            action: 'download-server-file',
          }),
        })
      } catch (error) {
        console.error(
          `[ServerFileGenerationWorker] Job ${job.id} failed:`,
          error,
        )

        // Notify error
        await notificationQueue.add('server-file-error', {
          userId: job.data.userId,
          title: 'Server File Generation Failed',
          content: 'An error occurred while generating your server file.',
          type: 'error',
          metadata: JSON.stringify({
            modpackId: job.data.modpackId,
          }),
        })

        throw error
      }
    },
    {
      connection,
    },
  )
