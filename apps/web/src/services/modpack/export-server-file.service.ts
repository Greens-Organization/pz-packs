import { env } from '@/env'
import { headers } from '../helpers'

export interface RequestServerFileResponse {
  exportId: string
}

export async function requestServerFile(
  modpackId: string,
  version: '41x' | '42x',
): Promise<RequestServerFileResponse> {
  const url = `${env.VITE_API_URL}/modpacks/${modpackId}/server-file`

  const body = {
    version,
  }

  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      ...headers,
    },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (res.status !== 202) {
    throw new Error(data.message ?? 'We have a problem creating this modpack')
  }

  return data
}
