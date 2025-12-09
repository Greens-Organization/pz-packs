import { env } from '@/env'
import { failure, headers, success } from '../helpers'

export interface ModpackMemberWithUser {
  id: string
  modpackId: string
  userId: string
  permission: string[]
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  user: {
    id: string
    name: string | null
    email: string
    image: string | null
  }
}

export async function getModpackMembersService(modpackId: string) {
  const url = `${env.VITE_API_URL}/modpacks/${modpackId}/members`

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: { ...headers },
  })

  if (res.status !== 200) return failure(res)
  return success<ModpackMemberWithUser[]>(res)
}

export type { ModpackMemberWithUser as ModpackMember }
