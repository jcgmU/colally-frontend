import '../styles/globals.css'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/context/theme-context'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
