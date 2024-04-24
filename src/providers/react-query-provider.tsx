'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import * as React from 'react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { useIsClient } from 'usehooks-ts'

export function ReactQueryClientProvider(props: { children: React.ReactNode }) {
  const isClient = useIsClient()

  const MAX_AGE = 1000 * 60 * 60 * 24 // 24 hours

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            gcTime: MAX_AGE,
          },
        },
      })
  )

  if (!isClient) return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>

  const persister = createSyncStoragePersister({ storage: window.localStorage })

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister, maxAge: MAX_AGE }}>
      {props.children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  )
}
