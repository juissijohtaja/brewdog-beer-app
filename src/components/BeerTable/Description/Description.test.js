import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import initialStoreState from '../../../setupTests'
import Description from './Description'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('Description Component', () => {
  let store, component

  beforeEach(() => {
    store = mockStore(initialStoreState)
    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <Description description='Lorem ipsum dolor sit amet' />
      </Provider>
    )
  })

  test('should render Lorem ipsum dolor sit amet', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})