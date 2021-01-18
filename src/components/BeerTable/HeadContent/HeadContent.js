import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableCell from '@material-ui/core/TableCell'
import beerTableColumns from './beerTableColumns'
import { sortChange } from '../../../reducers/sortReducer/sortReducer'

const HeadContent = () => {
  const sortDesc = useSelector(state => state.sortDesc)
  const dispatch = useDispatch()
  const handleSort = () => dispatch(sortChange())

  return (
    <TableHead data-testid='head-content'>
      <TableRow>
        {beerTableColumns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.sortable
              ? <TableSortLabel
                className='sortLabel'
                direction={sortDesc ? 'desc' : 'asc'}
                active
                onClick={handleSort}
              >
                {column.label}
              </TableSortLabel>
              : column.label
            }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default HeadContent