import Redis from 'ioredis'
import { env } from './env'

export const cacheClient = new Redis(env.SECONDARY_DATABASE_URL)
