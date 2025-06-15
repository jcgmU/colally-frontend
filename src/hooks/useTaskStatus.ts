import { useState } from 'react'

export function useTaskStatus() {
  const [status, setStatus] = useState('')
  return { status, setStatus }
}
