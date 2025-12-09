import { MembersList } from './members-list'

interface ModpackMembersProps {
  modpackId: string
  canManageMembers?: boolean
}

export function ModpackMembers({
  modpackId,
  canManageMembers = false,
}: ModpackMembersProps) {
  return (
    <div>
      <h1 className="font-medium">Members</h1>
      <MembersList modpackId={modpackId} canManageMembers={canManageMembers} />
    </div>
  )
}
