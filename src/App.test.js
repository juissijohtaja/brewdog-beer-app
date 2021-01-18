import React from 'react'
import { render, screen, initialStoreState } from './test-utils'
import App from './App'

test('Renders the connected app with initialState', () => {
  render(<App />, { initialState: initialStoreState })

  expect(screen.getByTestId('app')).toBeInTheDocument()
})