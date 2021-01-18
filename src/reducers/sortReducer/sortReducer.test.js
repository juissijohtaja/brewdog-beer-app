import sortReducer from './sortReducer'
import { sortChange, sortReset } from './sortReducer'

describe('sort reducer', () => {
  const initialState = true

  test('should return the initial state', () => {
    expect(sortReducer(undefined, {}))
      .toEqual(true)
  })

  test('should handle SET_SORT', () => {
    expect(sortReducer(true, { type: 'SET_SORT' }))
      .toEqual(false)

    expect(sortReducer(false, { type: 'SET_SORT' }))
      .toEqual(true)
  })

  test('should handle RESET_SORT', () => {
    expect(sortReducer(true, { type: 'RESET_SORT' }))
      .toEqual(initialState)

    expect(sortReducer(false, { type: 'RESET_SORT' }))
      .toEqual(initialState)
  })
})

describe('sort actions', () => {
  test('should create an action to change sort order', () => {
    const expectedAction = {
      type: 'SET_SORT',
    }
    expect(sortChange()).toEqual(expectedAction)
  })

  test('should create an action to reset sort order', () => {
    const expectedAction = {
      type: 'RESET_SORT',
    }
    expect(sortReset()).toEqual(expectedAction)
  })
})