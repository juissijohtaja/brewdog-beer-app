import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
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

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store