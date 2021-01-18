import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { initialStoreState } from '../../setupTests'
import MainNav from './MainNav'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

describe('MainNav Component', () => {
  let store, component
  const mockStore = configureStore([])

  beforeEach(() => {
    store = mockStore(initialStoreState)
    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <MainNav />
      </Provider>
    )
  })

  it('MainNav should render AppBar, EqualizerIcon and Beers', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
