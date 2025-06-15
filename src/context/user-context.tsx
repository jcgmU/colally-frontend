'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: string
  name: string
}

interface UserContextProps {
  user: User | null
  setUser: (user: User | null) => void
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}
