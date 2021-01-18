import React from 'react'
import { useSelector } from 'react-redux'
import TableBody from '@material-ui/core/TableBody'
import RowContent from '../RowContent/RowContent'
import { getSelectedBeers } from '../../../reducers/beerReducer/selectors/beerSelector'

const BodyContent = () => {
  const page = useSelector(state => state.pagination.page)
  const rowsPerPage = useSelector(state => state.pagination.rowsPerPage)
  const beers = useSelector(getSelectedBeers)

  return (
    <TableBody data-testid='body-content'>
      {(rowsPerPage > 0
        ? beers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : beers
      ).map((beer) => (
        <RowContent key={beer.id} beer={beer} />
      ))}
    </TableBody>
  )}

export default BodyContent