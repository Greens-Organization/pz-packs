import { modpackMemberRepository, modpackRepository } from '@org/database'
import { ApiResponse } from '@/utils'
import type { MemberIdParam } from '../validations'

interface RemoveMemberControllerParams {
  params: MemberIdParam
  memberEmail: string
}

export async function removeMemberController({
  params,
  memberEmail,
}: RemoveMemberControllerParams) {
  const modpack = await modpackRepository.findById(params.modpackId)

  if (!modpack) {
    return new ApiResponse(
      {
        error: {
          message: 'Modpack not found',
        },
      },
      404,
    )
  }

  // Check if user is the owner
  const member = await modpackMemberRepository.findByEmailMember(
    modpack.id,
    memberEmail,
  )
  if (!member) {
    return new ApiResponse(
      {
        error: {
          message: 'Member not found',
        },
      },
      404,
    )
  }
  if (modpack.owner !== member.id) {
    return new ApiResponse(
      {
        error: {
          message: 'Only the owner can remove members from this modpack',
        },
      },
      403,
    )
  }

  // Check if member exists
  const isMember = await modpackMemberRepository.isMember(
    params.modpackId,
    params.memberId,
  )
  if (!isMember) {
    return new ApiResponse(
      {
        error: {
          message: 'User is not a member of this modpack',
        },
      },
      404,
    )
  }

  await modpackMemberRepository.removeMember(params.modpackId, params.memberId)

  return new ApiResponse(
    {
      message: 'Member removed successfully',
    },
    200,
  )
}
