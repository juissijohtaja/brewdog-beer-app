import '@testing-library/jest-dom'

const initialStoreState = {
  beers: [],
  keyword: '',
  pagination: {
    page: 0,
    rowsPerPage: 10
  },
  sortDesc: true
}

export const changedStoreState = {
  beers: [{
    id: 999,
    beer: 1111,
    description: 'Lorem ipsum dolor sit amet',
    startDate: '1999-12-31T00:00:00+00:00',
    category: 'Test',
    responsible: 'John Doe',
    savingsAmount: 1234.56,
    currency: 'EUR',
    complexity: 'Simple'
  },
  {
    id: 9998,
    beer: '',
    description: '',
    startDate: '',
    category: '',
    responsible: '',
    savingsAmount: '',
    currency: '',
    complexity: ''
  }],
  keyword: 'lorem',
  pagination: {
    page: 0,
    rowsPerPage: -1
  },
  sortDesc: false
}

export default initialStoreState