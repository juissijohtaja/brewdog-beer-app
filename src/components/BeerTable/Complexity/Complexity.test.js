import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import initialStoreState from '../../../setupTests'
import Complexity from './Complexity'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('Complexity Component', () => {
  let store, component

  beforeEach(() => {
    store = mockStore(initialStoreState)
    store.dispatch = jest.fn()
  })

  test('should render Simple', () => {
    component = renderer.create(
      <Provider store={store}>
        <Complexity complexity='Simple' />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should render Moderate', () => {
    component = renderer.create(
      <Provider store={store}>
        <Complexity complexity='Moderate' />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should render Hazardous', () => {
    component = renderer.create(
      <Provider store={store}>
        <Complexity complexity='Hazardous' />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

})