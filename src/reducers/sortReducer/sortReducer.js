const sortReducer = (state = true, action) => {
  switch (action.type) {
  case 'SET_SORT':
    return !state
  case 'RESET_SORT':
    return true
  default:
    return state
  }
}

export const sortChange = () => ({ type: 'SET_SORT' })
export const sortReset = () => ({ type: 'RESET_SORT' })

export default sortReducer