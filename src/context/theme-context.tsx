'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ThemeContextProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
