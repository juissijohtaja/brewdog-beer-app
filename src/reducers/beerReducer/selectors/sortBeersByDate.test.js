import sortBeersByDate from './sortBeersByDate'

const beers = [
  { startDate: '1999-12-21T00:00:00+00:00' },
  { startDate: '2010-06-31T00:00:00+00:00' },
  { startDate: '1999-06-01T00:00:00+00:00' },
  { startDate: '1999-12-31T00:00:00+00:00' },
]
const expectedAction = [
  { startDate: '2010-06-31T00:00:00+00:00' },
  { startDate: '1999-12-31T00:00:00+00:00' },
  { startDate: '1999-12-21T00:00:00+00:00' },
  { startDate: '1999-06-01T00:00:00+00:00' },
]

describe('sort beers by date', () => {
  test('should order beers correctly in descending order', () => {
    expect(sortBeersByDate(beers, true)).toEqual(expectedAction)
  })

  test('should order beers correctly in ascending order', () => {
    expect(sortBeersByDate(beers, false)).toEqual(expectedAction.reverse())
  })
})
