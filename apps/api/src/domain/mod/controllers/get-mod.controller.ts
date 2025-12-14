import { ApiResponse } from '@/utils'
import type { GetModUseCase } from '../use-cases/get-mod'

interface GetModControllerParams {
  params: {
    id: string
  }
}

export class GetModController {
  constructor(private getModUseCase: GetModUseCase) {}

  async handle({ params }: GetModControllerParams) {
    const { id } = params

    const mod = await this.getModUseCase.execute(id)

    if (!mod) {
      return new ApiResponse({ error: { message: 'Mod not found' } }, 404)
    }

    return new ApiResponse(mod, 200)
  }
}
