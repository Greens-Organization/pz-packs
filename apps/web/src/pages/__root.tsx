import { Toaster } from '@org/design-system/components/ui/sonner'
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import * as React from 'react'
import { AppHeader } from '@/components/header'
import { ReactQueryProvider } from '@/lib/react-query'
import { NotFoundPage } from './-components/not-found-page'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  head: () => ({
    meta: [
      { title: 'PZ Packs' },
      {
        name: 'description',
        content:
          'Project Zomboid modpack platform. Discover, create, and share modpacks with ease!',
      },
      { property: 'og:title', content: 'PZ Packs' },
      {
        property: 'og:description',
        content:
          'Project Zomboid modpack platform. Discover, create, and share modpacks with ease!',
      },
      { property: 'og:image', content: '/brand/pz-packs-logo.svg' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'PZ Packs' },
      {
        name: 'twitter:description',
        content:
          'Project Zomboid modpack platform. Discover, create, and share modpacks with ease!',
      },
      { name: 'twitter:image', content: '/brand/pz-packs-logo.svg' },
      { name: 'theme-color', content: '#4ade80' },
    ],
  }),
})

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <ReactQueryProvider>
        <Toaster position="bottom-center" />
        <AppHeader />
        <Outlet />
      </ReactQueryProvider>
      <Scripts />
    </React.Fragment>
  )
}
