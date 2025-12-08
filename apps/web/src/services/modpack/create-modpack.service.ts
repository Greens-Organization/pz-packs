import type { DModpack } from '@org/database/schemas'
import { env } from '@/env'
import { failure, headers, success } from '../helpers'

type SuccessResponse = DModpack

interface CreateModpackParams {
  name: string
  description?: string
  avatarUrl?: string
  steamUrl?: string
}

export async function createModpackService(params: CreateModpackParams) {
  const url = `${env.VITE_API_URL}/modpacks`

  const body = {
    name: params.name,
    description: params.description,
    avatarUrl: params.avatarUrl,
    steamWorkshopUrl: params.steamUrl,
  }

  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      ...headers,
    },
    body: JSON.stringify(body),
  })

  if (res.status !== 201) return failure(res)
  return success<SuccessResponse>(res)
}
