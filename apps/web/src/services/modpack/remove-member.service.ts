import { env } from '@/env'
import { failure, headers, success } from '../helpers'

export async function removeModpackMemberService(
  modpackId: string,
  memberId: string,
) {
  const url = `${env.VITE_API_URL}/modpacks/${modpackId}/members/${memberId}`

  const res = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
    headers: { ...headers },
  })

  if (res.status !== 204 && res.status !== 200) return failure(res)
  return success<void>(res)
}
