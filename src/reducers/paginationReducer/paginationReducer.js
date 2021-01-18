const initialState = {
  page: 0,
  rowsPerPage: 10,
}

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_PAGE':
    return { ...state, page: action.data }
  case 'RESET_PAGE':
    return { ...state, page: initialState.page }
  case 'SET_ROWS':
    return { ...state, rowsPerPage: action.data }
  case 'RESET_ROWS':
    return { ...state, rowsPerPage: initialState.rowsPerPage }
  default:
    return state
  }
}

export const pageChange = (value) => {
  return {
    type: 'SET_PAGE',
    data: value
  }
}

export const pageReset = () => {
  return {
    type: 'RESET_PAGE',
  }
}

export const rowsChange = (value) => {
  return {
    type: 'SET_ROWS',
    data: value
  }
}

export const rowsReset = () => {
  return {
    type: 'RESET_ROWS',
  }
}

export default paginationReducer