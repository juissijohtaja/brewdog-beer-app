import { pageChange, pageReset, rowsChange, rowsReset } from './paginationReducer'

describe('pagination actions', () => {
  test('should create an action to change page', () => {
    const expectedAction = {
      type: 'SET_PAGE',
      data: 1
    }
    expect(pageChange(1)).toEqual(expectedAction)
  })

  test('should create an action to reset page', () => {
    const expectedAction = {
      type: 'RESET_PAGE'
    }
    expect(pageReset()).toEqual(expectedAction)
  })
})

describe('rows per page actions', () => {
  test('should create an action to change rows per page', () => {
    const expectedAction = {
      type: 'SET_ROWS',
      data: 5
    }
    expect(rowsChange(5)).toEqual(expectedAction)
  })

  test('should create an action to reset rows per page', () => {
    const expectedAction = {
      type: 'RESET_ROWS'
    }
    expect(rowsReset()).toEqual(expectedAction)
  })
})