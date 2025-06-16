import { useState } from 'react'

export function useProjectFilter() {
  const [query, setQuery] = useState('')
  return { query, setQuery }
}
