import { getBeers } from './beerReducer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'

jest.mock('axios')

afterEach(() => {
  jest.clearAllMocks()
})

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(jest.fn())
  jest.spyOn(console, 'debug').mockImplementation(jest.fn())
})

describe('beer reducer', () => {
  jest.mock('../../store.js')
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  test('get beer data', async () => {
    const store = mockStore()

    const mockData = [{
      beer: 1111,
      description: 'Lorem ipsum dolor sit amet',
      'start date': '1999-12-31T00:00:00+00:00',
      category: 'Test',
      responsible: 'John Doe',
      'savings amount': 1234.567890,
      currency: 'EUR',
      complexity: 'Simple'
    }]

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    )

    const expectedActions = [
      {
        type: 'GET_BEERS',
        data: [{
          id: 1,
          beer: 1111,
          description: 'Lorem ipsum dolor sit amet',
          startDate: '1999-12-31T00:00:00+00:00',
          category: 'Test',
          responsible: 'John Doe',
          savingsAmount: 1234.57,
          currency: 'EUR',
          complexity: 'Simple'
        }]
      },
    ]

    await store.dispatch(getBeers())

    expect(store.getActions()).toEqual(expectedActions)
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  test('null, NULL and empty data is processed correctly', async () => {
    const store = mockStore()

    const mockData = [
      {
        beer: null,
        description: null,
        'start date': null,
        category: null,
        responsible: null,
        'savings amount': null,
        currency: null,
        complexity: null
      },
      {
        beer: '',
        description: '',
        'start date': '',
        category: '',
        responsible: '',
        'savings amount': '',
        currency: '',
        complexity: ''
      },{
        beer: 'NULL',
        description: 'NULL',
        'start date': 'NULL',
        category: 'NULL',
        responsible: 'NULL',
        'savings amount': 'NULL',
        currency: 'NULL',
        complexity: 'NULL'
      }
    ]

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    )

    const expectedActions = [
      {
        type: 'GET_BEERS',
        data: [{
          id: 1,
          beer: '',
          description: '',
          startDate: '',
          category: '',
          responsible: '',
          savingsAmount: '',
          currency: '',
          complexity: ''
        },
        {
          id: 2,
          beer: '',
          description: '',
          startDate: '',
          category: '',
          responsible: '',
          savingsAmount: '',
          currency: '',
          complexity: ''
        },
        {
          id: 3,
          beer: '',
          description: '',
          startDate: '',
          category: '',
          responsible: '',
          savingsAmount: '',
          currency: '',
          complexity: ''
        }]
      },
    ]

    await store.dispatch(getBeers())

    expect(store.getActions()).toEqual(expectedActions)
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})