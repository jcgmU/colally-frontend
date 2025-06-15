/* eslint-env vitest */
import { render, screen } from '@testing-library/react'

import LoginPage from './page'
import '@testing-library/jest-dom'

describe('LoginPage', () => {
  it('renders form inputs', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })
})
