import React from 'react'
import { render, screen, initialStoreState } from '../../../test-utils'
import BodyContent from './BodyContent'

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(jest.fn())
  jest.spyOn(console, 'debug').mockImplementation(jest.fn())
})

describe('BeerTable Component', () => {
  it('BodyContent is rendered', () => {
    const wrapper = document.createElement('table')

    render(<BodyContent />, {
      container: document.body.appendChild(wrapper)
    }, { initialState: initialStoreState })

    expect(screen.getByTestId('body-content')).toBeInTheDocument()
  })
})