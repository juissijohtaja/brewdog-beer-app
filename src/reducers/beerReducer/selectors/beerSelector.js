import { createSelector } from 'reselect'
import sortBeersByDate from './sortBeersByDate'
import filterBeersByKeyword from './filterBeersByKeyword'

const getKeyword = state => state.keyword
const getBeers = state => state.beers
const getSort = state => state.sortDesc
const getSortedBeers = state => sortBeersByDate(state.beers, state.sortDesc)

export const getSelectedBeers = createSelector(
  [ getKeyword, getSort, getSortedBeers ],
  (keyword, sortDesc, sortedBeers) => {
    const beersToShow = keyword
      ? filterBeersByKeyword(sortedBeers, keyword)
      : [...sortedBeers]
    console.log('beersToShow', beersToShow)
    return beersToShow
  }
)

export const getBeerCount = createSelector(
  [getBeers],
  (beers) => {
    return beers.length
  }
)

export const getSelectedBeerCount = createSelector(
  [getSelectedBeers],
  (beersToShow) => {
    return beersToShow.length
  }
)