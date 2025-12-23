import '@/env'
import { initRoutes } from './infra/http/routes'
import { server } from './infra/http/server'
import { setupQueues, shutdownQueues } from './infra/queue/manager'

setupQueues()

const app = server
  .use(initRoutes)
  .get('/health', () => ({
    message: 'OK',
  }))
  .listen(3001)

console.log(`🦊 Elysia is running at ${app.server?.url}`)

const gracefulShutdown = async () => {
  console.log('Stopping server...')
  await shutdownQueues()
  process.exit(0)
}

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)
