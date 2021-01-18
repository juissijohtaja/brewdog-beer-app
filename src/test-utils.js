import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import beerReducer from './reducers/beerReducer/beerReducer'
import searchReducer from './reducers/searchReducer/searchReducer'
import paginationReducer from './reducers/paginationReducer/paginationReducer'
import sortReducer from './reducers/sortReducer/sortReducer'

const reducer = combineReducers({
  beers: beerReducer,
  keyword: searchReducer,
  pagination: paginationReducer,
  sortDesc: sortReducer
})

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
