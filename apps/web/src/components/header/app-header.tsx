import { ThemeToggle } from './theme-toggle'
import { NavUser } from './nav-user'

export function AppHeader() {
  return (
    <header className="container flex justify-end items-center my-4">
      <nav className="flex flex-row gap-3 items-center">
        <ThemeToggle />
        <NavUser />
      </nav>
    </header>
  )
}
