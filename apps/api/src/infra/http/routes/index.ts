import { server } from '@/infra/http/server'
import { openApiPlugin } from '../plugins'
import { modpacksRoutes } from './modpacks'

export function initRoutes() {
  server.use(openApiPlugin).use(modpacksRoutes)
  return server
}
