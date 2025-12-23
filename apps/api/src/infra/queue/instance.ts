import { Queue } from 'bullmq'
import { connection } from './connection'

export const APP_QUEUE_NAME = 'pz-modpacks-queue'

export const appQueue = new Queue(APP_QUEUE_NAME, {
  connection,
  defaultJobOptions: {
    removeOnComplete: true,
    removeOnFail: 1000,
  },
})
