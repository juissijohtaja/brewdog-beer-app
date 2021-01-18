import filterBeersByKeyword from './filterBeersByKeyword'

const beers = [
  { foodPairing: 'Substitute Crème fraîche with evaporated milk in ice-cream products' },
  { foodPairing: 'Decrease production related non-categorized side costs' },
  { foodPairing: 'Stop using Kryptonite in production' }
]

describe('filter beers', () => {
  test('should filter correct beers - case 1', () => {
    const expectedAction = [
      { foodPairing: 'Substitute Crème fraîche with evaporated milk in ice-cream products' },
      { foodPairing: 'Decrease production related non-categorized side costs' }
    ]
    expect(filterBeersByKeyword(beers, 'cre')).toEqual(expectedAction)
  })

  test('case 1 with caps should give same result', () => {
    const expectedAction = [
      { foodPairing: 'Substitute Crème fraîche with evaporated milk in ice-cream products' },
      { foodPairing: 'Decrease production related non-categorized side costs' }
    ]
    expect(filterBeersByKeyword(beers, 'CRE')).toEqual(expectedAction)
  })

  test('should filter correct beers - case 2', () => {
    const expectedAction = [
      { foodPairing: 'Stop using Kryptonite in production' }
    ]
    expect(filterBeersByKeyword(beers, 'kryp')).toEqual(expectedAction)
  })

  test('not found should give empty list', () => {
    const expectedAction = []
    expect(filterBeersByKeyword(beers, 'lorem')).toEqual(expectedAction)
  })

  test('empty keyword should return all beers', () => {
    expect(filterBeersByKeyword(beers, '')).toEqual(beers)
  })
})
