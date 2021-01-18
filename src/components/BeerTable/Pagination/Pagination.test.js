import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import initialStoreState from '../../../setupTests'
import changedStoreState from '../../../setupTests'
import Pagination from './Pagination'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { pageChange } from '../../../reducers/paginationReducer/paginationReducer'
import { render, screen } from '../../../test-utils'

describe('Pagination Component', () => {

  test('Previous page button is disabled', () => {
    const wrapper = document.createElement('div')

    render(<Pagination />, {
      container: document.body.appendChild(wrapper)
    }, { initialState: initialStoreState })

    expect(screen.getByLabelText('Previous page')).toBeDisabled()
  })

  test('Pagination renders changed state correctly', () => {
    const wrapper = document.createElement('div')

    render(<Pagination />, {
      container: document.body.appendChild(wrapper)
    }, { initialState: changedStoreState })

    expect(screen.getByLabelText('rows per page')).toHaveTextContent(
      'All'
    )
  })
})

describe('Pagination Component actions', () => {
  let store, component
  const mockStore = configureStore([])

  beforeEach(() => {
    store = mockStore(initialStoreState)
    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <Pagination />
      </Provider>
    )
  })

  test('changing page should dispatch pageChange action', () => {
    renderer.act(() => {
      component.root.findByProps({ title: 'Next page' }).props.onClick()
    })

    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(
      pageChange(1)
    )
  })
})