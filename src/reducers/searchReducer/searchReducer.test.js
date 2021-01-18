import searchReducer from './searchReducer'
import { keywordChange, keywordReset } from './searchReducer'

describe('search reducer', () => {
  const initialState = ''

  test('should return the initial state', () => {
    expect(searchReducer(undefined, {}))
      .toEqual('')
  })

  test('should handle SET_KEYWORD', () => {
    expect(searchReducer(initialState, { type: 'SET_KEYWORD', keyword: 'a' }))
      .toEqual('a')

    expect(searchReducer(initialState, { type: 'SET_KEYWORD', keyword: 'lorem' }))
      .toEqual('lorem')

    expect(searchReducer('lorem', { type: 'SET_KEYWORD', keyword: 'lorem ipsum' }))
      .toEqual('lorem ipsum')
  })

  test('should handle RESET_KEYWORD', () => {
    expect(searchReducer('', { type: 'RESET_KEYWORD' }))
      .toEqual(initialState)

    expect(searchReducer('lorem', { type: 'RESET_KEYWORD' }))
      .toEqual(initialState)

    expect(searchReducer('lorem ipsum dolor', { type: 'RESET_KEYWORD' }))
      .toEqual(initialState)
  })
})

describe('search actions', () => {
  test('should create an action to change keyword', () => {
    const expectedAction = {
      type: 'SET_KEYWORD',
      keyword: 'a'
    }
    expect(keywordChange('a')).toEqual(expectedAction)
  })

  test('should create an action to reset keyword', () => {
    const expectedAction = {
      type: 'RESET_KEYWORD',
    }
    expect(keywordReset()).toEqual(expectedAction)
  })
})