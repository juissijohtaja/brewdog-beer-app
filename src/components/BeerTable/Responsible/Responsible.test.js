import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import initialStoreState from '../../../setupTests'
import Responsible from './Responsible'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('Responsible Component', () => {
  let store, component

  beforeEach(() => {
    store = mockStore(initialStoreState)
    store.dispatch = jest.fn()
  })

  test('should render name with one part with one initial', () => {
    component = renderer.create(
      <Provider store={store}>
        <Responsible responsible='Johnny' />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should render name with two parts with two initial', () => {
    component = renderer.create(
      <Provider store={store}>
        <Responsible responsible='John Doe' />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should render name with multiple parts with two initials', () => {
    component = renderer.create(
      <Provider store={store}>
        <Responsible responsible='John Doe Old Boy' />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})