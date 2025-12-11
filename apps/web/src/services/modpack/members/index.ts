import { addModpackMemberService } from './add-member.service'
import { listModpackMembersService } from './list-members.service'
import { removeModpackMemberService } from './remove-member.service'

export const MembersService = {
  list: listModpackMembersService,
  add: addModpackMemberService,
  remove: removeModpackMemberService,
}
