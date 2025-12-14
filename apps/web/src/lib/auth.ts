import { generateAuthClient } from '@org/auth/client'
import { env } from '@/env'

export const authClient = generateAuthClient(env.VITE_API_URL)
