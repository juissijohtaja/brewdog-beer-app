import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { orange, red, lightGreen, grey } from '@material-ui/core/colors'

const useStyles = makeStyles(() => ({
  tag: {
    borderRadius: 4,
    fontSize: '0.8em',
    textTransform: 'uppercase',
    fontWeight: 500,
    letterSpacing: 0.7,
    paddingTop: 1,
    paddingBottom: 1,
    width: 36,
    textAlign: 'center'
  },
  simple: {
    color: lightGreen[800],
    backgroundColor: lightGreen[50],
  },
  moderate: {
    color: orange[800],
    backgroundColor: orange[50],
  },
  hazardous: {
    color: red[800],
    backgroundColor: red[50],
  },
  default: {
    color: orange[800],
    backgroundColor: grey[50],
  },
}))

const Abv = ({ abv }) => {
  const classes = useStyles()

  if (abv <= 5) {
    return <Box className={`${classes.tag} ${classes.simple}`} data-testid='abv'>
      {abv}
    </Box>
  } else if (abv > 5 && abv <= 7) {
    return <Box className={`${classes.tag} ${classes.moderate}`} data-testid='abv'>
      {abv}
    </Box>
  } else if (abv > 7) {
    return <Box className={`${classes.tag} ${classes.hazardous}`} data-testid='abv'>
      {abv}
    </Box>
  } else {
    return <Box className={`${classes.tag} ${classes.default}`} data-testid='default'>
      {abv}
    </Box>
  }
}

export default Abv