import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import initialStoreState from '../../../setupTests'
import Abv from './Abv'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('Abv Component', () => {
  let store, component

  beforeEach(() => {
    store = mockStore(initialStoreState)
    store.dispatch = jest.fn()
  })

  test('should render Low', () => {
    component = renderer.create(
      <Provider store={store}>
        <Abv abv='Low' />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should render Medium', () => {
    component = renderer.create(
      <Provider store={store}>
        <Abv abv='Medium' />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should render High', () => {
    component = renderer.create(
      <Provider store={store}>
        <Abv abv='High' />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

})