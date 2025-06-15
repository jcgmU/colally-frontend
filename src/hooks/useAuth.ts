import { useUser } from '@/context/user-context'

export function useAuth() {
  const { user, setUser } = useUser()
  return { user, setUser }
}
