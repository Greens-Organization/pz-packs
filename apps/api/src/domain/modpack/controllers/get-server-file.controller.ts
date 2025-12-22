import { ApiResponse } from '@/utils'
import type { GetServerFileUseCase } from '../use-cases/get-server-file'

interface GetServerFileControllerParams {
  params: { exportId: string }
}

export class GetServerFileController {
  constructor(private getServerFileUseCase: GetServerFileUseCase) {}

  async handle({ params }: GetServerFileControllerParams) {
    try {
      const result = await this.getServerFileUseCase.execute(params.exportId)

      // We return the result directly, the route handler will handle headers
      return new ApiResponse(result, 200)
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      if (message === 'Export request not found') {
        return new ApiResponse({ error: { message } }, 404)
      }
      if (message === 'File generation is not completed yet') {
        return new ApiResponse({ error: { message } }, 202)
      }
      return new ApiResponse({ error: { message } }, 500)
    }
  }
}
