import { appWorker } from './app-queue'
import { connection } from './connection'
import { appQueue } from './instance'

const workers = [appWorker]

const queues = [appQueue]

export const setupQueues = () => {
  console.log('Queues and workers initialized')

  if (
    'options' in connection &&
    connection.options.maxRetriesPerRequest !== null
  ) {
    console.warn(
      'WARNING: BullMQ connection has maxRetriesPerRequest set. This may cause errors.',
    )
  }

  // Optional: Add global error listeners or monitoring here
  workers.forEach((worker) => {
    worker.on('error', (err) => {
      console.error(`Worker ${worker.name} error:`, err)
    })
  })
}

export const shutdownQueues = async () => {
  console.log('Shutting down queues and workers...')

  await Promise.all([
    ...workers.map((w) => w.close()),
    ...queues.map((q) => q.close()),
  ])

  console.log('Queues and workers shut down.')
}
