import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import RowContent from './RowContent'
import '@testing-library/jest-dom/extend-expect'
import { render } from '../../../test-utils'

describe('RowContent Component snapshot tests', () => {

  const selectedClasses = [
    '.beer',
    '.description',
    '.startDate',
    '.category',
    '.responsible',
    '.savingsAmount',
    '.currency',
    '.complexity'
  ]

  test('renders beer content correctly in respective table cells', () => {
    const beer = {
      id: 999,
      beer: 1111,
      description: 'Lorem ipsum dolor sit amet',
      startDate: '1999-12-31T00:00:00+00:00',
      category: 'Test',
      responsible: 'John Doe',
      savingsAmount: 1234.56,
      currency: 'EUR',
      complexity: 'Simple'
    }
    const tableBody = document.createElement('tbody')
    const component = render(
      <RowContent beer={beer} />, {
        container: document.body.appendChild(tableBody)
      }
    )

    expect(component.container.querySelector('.beer')).toHaveTextContent(
      '1111'
    )
    expect(component.container.querySelector('.description')).toHaveTextContent(
      'Lorem ipsum dolor sit amet'
    )
    expect(component.container.querySelector('.startDate')).toHaveTextContent(
      '31.12.1999'
    )
    expect(component.container.querySelector('.category')).toHaveTextContent(
      'Test'
    )
    expect(component.container.querySelector('.responsible')).toHaveTextContent(
      'John Doe'
    )
    expect(component.container.querySelector('.savingsAmount')).toHaveTextContent(
      '1234.56'
    )
    expect(component.container.querySelector('.currency')).toHaveTextContent(
      'EUR'
    )
    expect(component.container.querySelector('.complexity')).toHaveTextContent(
      'Simple'
    )
  })

  test('renders empty content as empty', () => {
    const beer = {
      id: 999,
      beer: '',
      description: '',
      startDate: '',
      category: '',
      responsible: '',
      savingsAmount: '',
      currency: '',
      complexity: ''
    }
    const tableBody = document.createElement('tbody')
    const component = render(
      <RowContent beer={beer} />, {
        container: document.body.appendChild(tableBody)
      }
    )

    selectedClasses.map(item => {
      const div = component.container.querySelector(item)
      expect(div).toBeEmptyDOMElement()
    })
  })

  test('display dates in correct format', () => {
    const tableBody = document.createElement('tbody')
    const testData = [
      {
        input: { startDate: '1999-02-01T00:00:00+00:00' },
        output: '1.2.1999'
      },
      {
        input: { startDate: '2000-11-01T00:00:00+00:00' },
        output: '1.11.2000'
      },
      {
        input: { startDate: '2010-02-11T00:00:00+00:00' },
        output: '11.2.2010'
      },
      {
        input: { startDate: '2015-12-11T00:00:00+00:00' },
        output: '11.12.2015'
      },
    ]

    testData.map(item => {
      const component = render(
        <RowContent beer={item.input} />, {
          container: document.body.appendChild(tableBody)
        }
      )
      expect(component.container.querySelector('.startDate')).toHaveTextContent(
        item.output
      )
    })
  })
})