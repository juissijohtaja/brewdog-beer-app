import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import HeadContent from './HeadContent/HeadContent'
import BodyContent from './BodyContent/BodyContent'
import BeerTablePagination from './Pagination/Pagination'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 90,
    },
    borderRadius: 4,
    overflow: 'hidden'
  },
  dataTable: {
    minWidth: 650,
  },
  dataTableContainer: {
    minHeight: 400,
  },
}))

const BeerTable = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} data-testid='beer-table'>
      <TableContainer className={classes.dataTableContainer}>
        <Table className={classes.dataTable} aria-label='data table'>
          <HeadContent />
          <BodyContent />
        </Table>
      </TableContainer>
      <BeerTablePagination />
    </Paper>
  )
}

export default BeerTable