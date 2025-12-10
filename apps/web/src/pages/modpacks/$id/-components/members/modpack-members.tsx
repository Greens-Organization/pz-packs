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
    <div className="flex flex-col gap-2 items-start">
      <h1 className="font-medium">Members</h1>
      <MembersList modpackId={modpackId} canManageMembers={canManageMembers} />
    </div>
  )
}
