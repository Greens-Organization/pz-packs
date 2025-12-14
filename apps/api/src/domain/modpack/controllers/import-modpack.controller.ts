import type { User } from '@org/auth/types'
import type { ModpackMemberRepository } from '@org/database/repository/modpack-member-repository'
import type { ModpackRepository } from '@org/database/repository/modpack-repository'
import type { ImportModpackFormData } from '@org/validation/forms/modpack/import-modpack.schema'
import { ApiResponse } from '@/utils'
import type { ImportModpackUseCase } from '../use-cases/import-modpack-use-case'

interface ImportModpackControllerParams {
  body: ImportModpackFormData
  params: {
    id: string // modpackId
  }
  user: User
}

export class ImportModpackController {
  constructor(
    private modpackRepository: ModpackRepository,
    private modpackMemberRepository: ModpackMemberRepository,
    private importModpackUseCase: ImportModpackUseCase,
  ) {}

  async handle({ body, params, user }: ImportModpackControllerParams) {
    const { id: modpackId } = params
    const { steamUrl } = body

    // 1. Check permissions
    const modpack = await this.modpackRepository.findById(modpackId)
    if (!modpack) {
      return new ApiResponse({ error: { message: 'Modpack not found' } }, 404)
    }

    if (!modpack.isActive) {
      return new ApiResponse(
        { error: { message: 'Modpack is not active' } },
        401,
      )
    }

    const isOwner = modpack.owner === user.id
    let isMember = false

    if (!isOwner) {
      const member = await this.modpackMemberRepository.findMember(
        modpackId,
        user.id,
      )
      // TODO: Check specific permission like 'ADD_MOD' or 'IMPORT_MODPACK'
      if (member?.isActive) {
        isMember = true
      }
    }

    if (!isOwner && !isMember) {
      return new ApiResponse(
        {
          error: { message: 'You do not have permission to edit this modpack' },
        },
        403,
      )
    }

    try {
      const result = await this.importModpackUseCase.execute(
        modpackId,
        steamUrl,
      )
      return new ApiResponse(result, 200)
    } catch (error) {
      console.error('Error importing modpack:', error)
      return new ApiResponse(
        {
          error: {
            message:
              error instanceof Error
                ? error.message
                : 'Failed to import modpack',
          },
        },
        400,
      )
    }
  }
}
