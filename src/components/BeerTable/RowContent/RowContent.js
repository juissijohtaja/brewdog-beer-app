import React from 'react'
import Moment from 'react-moment'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Abv from '../Abv/Abv'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import Description from '../Description/Description'

const useStyles = makeStyles(theme => ({
  textWrap: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  sizeLarge: {
    width: 180,
  },
  beerAvatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}))

const RowContent = ({ beer }) => {
  const classes = useStyles()

  return (
    <TableRow>
      <TableCell className={`image ${classes.textWrap}`}>
        <Avatar
          alt={beer.name}
          src={beer.image}
          className={classes.beerAvatar}
        />
      </TableCell>
      <TableCell className={`name ${classes.textWrap}`}>
        {beer.name}
      </TableCell>
      <TableCell className='abv' align='right'>
        <Abv abv={beer.abv} />
      </TableCell>
      <TableCell className='description'>
        {beer.description
          ? <Description description={beer.description} />
          : ''
        }
      </TableCell>
      <TableCell className='firstBrewed' align='right'>
        {beer.firstBrewed
          ? <Moment format='D.M.YYYY'>{beer.firstBrewed}</Moment>
          : ''
        }
      </TableCell>
      <TableCell className='tagline'>
        <Box className={`${classes.textWrap} ${classes.sizeLarge}`}>
          {beer.tagline}
        </Box>
      </TableCell>
      <TableCell className='brewersTips'>
        <Box className={`${classes.textWrap} ${classes.sizeLarge}`}>
          {beer.brewersTips}
        </Box>
      </TableCell>
      <TableCell className='ph' align='right'>
        {beer.ph}
      </TableCell>
      <TableCell className='foodPairing'>
        <Box className={`${classes.textWrap}`}>
          {beer.foodPairing}
        </Box>
      </TableCell>
    </TableRow>
  )
}

export default RowContent