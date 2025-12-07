import { Button } from '@org/design-system/components/ui/button'
import { CaretUpDownIcon, SignOutIcon } from '@org/design-system/components/ui/icons'
import { auth } from '@/lib/auth'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@org/design-system/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@org/design-system/components/ui/avatar'
import { Link } from '@tanstack/react-router'

// export function UserMenu() {



//   return (
//     <div className="flex flex-row gap-2 items-center">
//       <img
//         src={data.user.image ?? ''}
//         alt={data.user.name ?? undefined}
//         className="rounded-radius w-8 h-8 border-2 border-border shadow"
//       />
//       <span className="font-medium">{data.user.name}</span>
//       <Button onClick={() => auth.signOut()}>
//         <SignOutIcon />
//         Logout
//       </Button>
//     </div>
//   )
// }



export function NavUser({ user }: { user?: User }) {
  const { isPending, data } = auth.useSession()
  if (isPending) return null

    if (!data) {
    return (
      <Button
        onClick={() =>
          auth.signIn.social({
            provider: 'discord',
            callbackURL: location.origin,
          })
        }
      >
        Login With Discord
      </Button>
    )
  }


  return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={user?.avatar_url || ''}
                  alt={user?.name ?? ''}
                />
                <AvatarFallback>
                  {user?.name ? getInitials(user?.name) : ''}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold ">
                  {user?.name || '...'}
                </span>
                <span className="truncate text-xs">{user?.email || '..'}</span>
              </div>
              <CaretUpDownIcon className="ml-auto size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user?.avatar_url || ''}
                    alt={user?.name || ''}
                  />
                  <AvatarFallback>
                    {user?.name ? getInitials(user?.name) : ''}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {user?.name || '...'}
                  </span>
                  <span className="truncate text-xs">
                    {user?.email || '..'}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex gap-1">
                  <Icon name="BadgeCheck" className="w-5 h-5" />
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <ToggleMode />
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex gap-1">
              <Button onClick={() => auth.signOut()}>
                <SignOutIcon />
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  );
}
