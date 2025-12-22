import type { User } from '@org/auth/types'
import { ApiResponse } from '@/utils'
import type { RequestServerFileUseCase } from '../use-cases/request-server-file'

interface RequestServerFileControllerParams {
  params: { id: string }
  body: { version: '41x' | '42x' }
  user: User
}

export class RequestServerFileController {
  constructor(private requestServerFileUseCase: RequestServerFileUseCase) {}

  async handle({ params, body, user }: RequestServerFileControllerParams) {
    try {
      const result = await this.requestServerFileUseCase.execute(
        params.id,
        user.id,
        body.version,
      )
      return new ApiResponse(result, 202)
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      return new ApiResponse({ error: { message } }, 500)
    }
  }
}
