import type { DModpackMember } from '@org/database/schemas'
import { env } from '@/env'
import { failure, headers, success } from '../helpers'

export async function addModpackMemberService(
  modpackId: string,
  email: string,
) {
  const url = `${env.VITE_API_URL}/modpacks/${modpackId}/members`

  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: { ...headers },
    body: JSON.stringify({ email, permission: ['read'] }),
  })

  if (res.status !== 201) return failure(res)
  return success<DModpackMember>(res)
}
