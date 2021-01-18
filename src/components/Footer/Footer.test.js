import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { initialStoreState } from '../../setupTests'
import Footer from './Footer'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { keywordReset } from '../../reducers/searchReducer/searchReducer'
import { pageReset, rowsReset } from '../../reducers/paginationReducer/paginationReducer'
import { sortReset } from '../../reducers/sortReducer/sortReducer'

describe('Footer Component', () => {
  let store, component
  const mockStore = configureStore([])

  beforeEach(() => {
    store = mockStore(initialStoreState)
    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <Footer />
      </Provider>
    )
  })

  it('should render BottomNavigation and Reset button', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should dispatch 4 actions on button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick()
    })

    expect(store.dispatch).toHaveBeenCalledTimes(4)
    expect(store.dispatch).toHaveBeenCalledWith(
      sortReset()
    )
    expect(store.dispatch).toHaveBeenCalledWith(
      pageReset()
    )
    expect(store.dispatch).toHaveBeenCalledWith(
      rowsReset()
    )
    expect(store.dispatch).toHaveBeenCalledWith(
      keywordReset()
    )
  })
})