import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import LocalDrinkIcon from '@material-ui/icons/LocalDrink'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navTheme: {
    backgroundColor: theme.palette.primary.main
  },
}))

const MainNav = () => {
  const classes = useStyles()

  return (
    <Box flexGrow={1} data-testid='main-nav'>
      <AppBar position='static' className={classes.navTheme} aria-label='main menu'>
        <Toolbar>
          <LocalDrinkIcon className={classes.menuButton} />
          <Typography variant='h6' className={classes.title}>
              Brewdog Beers {'&'} Food Matcher
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MainNav