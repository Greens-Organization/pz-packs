import { env } from '@/env'
import { headers } from '../../helpers'

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

  if (res.status !== 204 && res.status !== 200) {
    const { error } = await res.json()
    throw new Error(error.message ?? 'We have a problem adding this member')
  }
  return await res.json()
}
