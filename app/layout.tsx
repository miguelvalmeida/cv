import type { PropsWithChildren } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  )
}
