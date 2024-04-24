import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { ReactQueryClientProvider } from '@/providers/react-query-provider'

export const metadata: Metadata = {
  title: 'Podcaster',
  description: 'A podcasting platform',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body>
        <ReactQueryClientProvider>
          <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
            <main className='h-screen overflow-y-auto'>{children}</main>
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
