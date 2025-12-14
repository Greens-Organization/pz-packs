import { ApiResponse } from '@/utils'
import type { GetModByWorkshopIdUseCase } from '../use-cases/get-mod-by-workshop-id'

interface GetModByWorkshopIdControllerParams {
  params: {
    workshopId: string
  }
}

export class GetModByWorkshopIdController {
  constructor(private getModByWorkshopIdUseCase: GetModByWorkshopIdUseCase) {}

  async handle({ params }: GetModByWorkshopIdControllerParams) {
    const { workshopId } = params

    const mod = await this.getModByWorkshopIdUseCase.execute(workshopId)

    if (!mod) {
      return new ApiResponse({ error: { message: 'Mod not found' } }, 404)
    }

    return new ApiResponse(mod, 200)
  }
}
