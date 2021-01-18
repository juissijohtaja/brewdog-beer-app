import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import initialStoreState from '../../../setupTests'
import HeadContent from './HeadContent'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { sortChange } from '../../../reducers/sortReducer/sortReducer'

describe('HeadContent snapshots and actions', () => {
  let store, component
  const mockStore = configureStore([])

  beforeEach(() => {
    store = mockStore(initialStoreState)
    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <HeadContent />
      </Provider>
    )
  })

  test('should render correctly', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should dispatch 1 action on icon click', () => {
    renderer.act(() => {
      component.root.findByProps({ className: 'sortLabel' }).props.onClick()
    })

    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(
      sortChange()
    )
  })
})