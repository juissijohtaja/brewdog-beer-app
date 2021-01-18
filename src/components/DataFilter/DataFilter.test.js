import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import initialStoreState from '../../test-utils'
import DataFilter from './DataFilter'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { keywordChange, keywordReset } from '../../reducers/searchReducer/searchReducer'

describe('DataFilter Component', () => {
  let store, component
  const mockStore = configureStore([])

  beforeEach(() => {
    store = mockStore({
      initialStoreState
    })

    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <DataFilter />
      </Provider>
    )
  })

  test('search field should render empty Search field, SearchIcon and placeholder text', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('clear search field should dispatch action', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick()
    })

    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(
      keywordReset()
    )
  })

  test('input on search field should dispatch action', () => {
    renderer.act(() => {
      component.root.findByType('input')
        .props.onChange({ target: { value: 'c' } })
    })

    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(
      keywordChange('c')
    )
  })
})