const searchReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_KEYWORD':
    return action.keyword
  case 'RESET_KEYWORD':
    return ''
  default:
    return state
  }
}

export const keywordChange = keyword => ({ type: 'SET_KEYWORD', keyword })
export const keywordReset = () => ({ type: 'RESET_KEYWORD' })

export default searchReducer