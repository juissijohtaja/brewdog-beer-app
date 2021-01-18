import React from 'react'
import TablePagination from '@material-ui/core/TablePagination'
import { useSelector, useDispatch } from 'react-redux'
import { pageChange, rowsChange } from '../../../reducers/paginationReducer/paginationReducer'
import { getSelectedBeerCount } from '../../../reducers/beerReducer/selectors/beerSelector'

const Pagination = () => {
  const dispatch = useDispatch()
  const page = useSelector(state => state.pagination.page)
  const rowsPerPage = useSelector(state => state.pagination.rowsPerPage)
  const selectedBeerCount = useSelector(getSelectedBeerCount)

  const handleChangePage = (event, newPage) => {
    dispatch(pageChange(newPage))
  }
  const handleChangeRows = (event) => {
    dispatch(rowsChange(+event.target.value))
    dispatch(pageChange(0))
  }

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 50]}
      colSpan={3}
      count={selectedBeerCount}
      rowsPerPage={rowsPerPage}
      page={page}
      component='div'
      data-testid='pagination'
      SelectProps={{
        inputProps: { 'aria-label': 'rows per page' },
        native: true,
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRows}
    />
  )}

export default Pagination