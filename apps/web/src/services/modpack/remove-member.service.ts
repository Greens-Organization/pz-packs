import { env } from '@/env'
import { failure, headers, success } from '../helpers'

export async function removeModpackMemberService(
  modpackId: string,
  email: string,
) {
  const url = `${env.VITE_API_URL}/modpacks/${modpackId}/members`

  const res = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
    headers: { ...headers },
    body: JSON.stringify({ email }),
  })

  if (res.status !== 204 && res.status !== 200) return failure(res)
  return success<void>(res)
}
