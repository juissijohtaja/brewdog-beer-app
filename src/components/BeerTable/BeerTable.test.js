import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../../test-utils'
import BeerTable from './BeerTable'
import initialStoreState from '../../setupTests'

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(jest.fn())
  jest.spyOn(console, 'debug').mockImplementation(jest.fn())
})

describe('BeerTable Component', () => {

  test('BeerTable container is rendered', () => {
    render(<BeerTable />, { initialState: initialStoreState })

    expect(screen.getByTestId('beer-table')).toBeInTheDocument()
  })

  test('Table element is rendered', () => {
    render(<BeerTable />, { initialState: initialStoreState })

    expect(screen.getByLabelText('data table')).toBeInTheDocument()
  })
})