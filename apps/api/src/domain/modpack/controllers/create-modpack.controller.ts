import type { User } from '@org/auth/types'
import { ApiResponse } from '@/utils'
import type { CreateModpackUseCase } from '../use-cases/create-modpack'
import type { CreateModpackSchema } from '../validations'

interface CreateModpackControllerParams {
  body: CreateModpackSchema
  user: User
}

export class CreateModpackController {
  constructor(private createModpackUseCase: CreateModpackUseCase) {}

  async handle({ body, user }: CreateModpackControllerParams) {
    try {
      const data = await this.createModpackUseCase.execute({
        name: body.name,
        description: body.description,
        avatarUrl: body.avatarUrl,
        isPublic: body.isPublic,
        steamUrl: body.steamWorkshopUrl,
        owner: user.id,
      })
      return new ApiResponse(data, 201)
    } catch (error: any) {
      if (error.message === 'Modpack with this name already exists') {
        return new ApiResponse({ error: { message: error.message } }, 409)
      }
      throw error
    }
  }
}
