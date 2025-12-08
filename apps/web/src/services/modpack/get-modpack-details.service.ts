import type { DModpack, DModpackMember } from '@org/database/schemas'
import { env } from '@/env'
import { failure, headers, success } from '../helpers'

type ModpackWithMembers = DModpack & {
  members: DModpackMember[]
}

export async function getModpackByIdService(id: string) {
  const url = `${env.VITE_API_URL}/modpacks/${id}`

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: { ...headers },
  })

  if (res.status !== 200) return failure(res)
  return success<ModpackWithMembers>(res)
}

export type { ModpackWithMembers }
