import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { orange, red, lightGreen, grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  tag: {
    borderRadius: 4,
    fontSize: '0.8em',
    textTransform: 'uppercase',
    fontWeight: 500,
    letterSpacing: 0.7,
    paddingTop: 1,
    paddingBottom: 1,
  },
  simple: {
    color: lightGreen[800],
    backgroundColor: lightGreen[50],
    width: 64,
  },
  moderate: {
    color: orange[800],
    backgroundColor: orange[50],
    width: 80,
  },
  hazardous: {
    color: red[800],
    backgroundColor: red[50],
    width: 90,
  },
  default: {
    color: orange[800],
    backgroundColor: orange[50],
    width: 90,
  },
}))

const Complexity = ({ complexity }) => {
  const classes = useStyles()
  switch(complexity) {
  case 'Simple':
    return <Box className={`${classes.tag} ${classes.simple}`} data-testid='complexity'>
      {complexity}
    </Box>
  case 'Moderate':
    return <Box className={`${classes.tag} ${classes.moderate}`} data-testid='complexity'>
      {complexity}
    </Box>
  case 'Hazardous':
    return <Box className={`${classes.tag} ${classes.hazardous}`} data-testid='complexity'>
      {complexity}
    </Box>
  default:
    return <Box className={`${classes.tag} ${classes.default}`} data-testid='default'>
      {complexity}
    </Box>
  }
}

export default Complexity