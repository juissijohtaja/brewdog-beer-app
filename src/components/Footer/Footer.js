import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import { grey } from '@material-ui/core/colors'
import { keywordReset } from '../../reducers/searchReducer/searchReducer'
import { pageReset, rowsReset } from '../../reducers/paginationReducer/paginationReducer'
import { sortReset } from '../../reducers/sortReducer/sortReducer'

const useStyles = makeStyles(theme => ({
  footerRoot: {
    background: grey[900],
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  },
  actionRoot: {
    color: grey[600],
    '&$actionSelected': {
      color: grey[50]
    }
  },
  actionSelected: {
    color: grey[50]
  }
}))

const Footer = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const actionClasses = {
    root: classes.actionRoot,
    selected: classes.actionSelected,
  }
  const [value, setValue] = React.useState(0)

  const handleReset = () => {
    dispatch(keywordReset())
    dispatch(pageReset())
    dispatch(rowsReset())
    dispatch(sortReset())
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      classes={{ root: classes.footerRoot }}
      data-testid='footer'
    >
      <BottomNavigationAction
        onClick={handleReset}
        classes={actionClasses}
        label='Reset'
        icon={<RotateLeftIcon />}
        aria-label='reset view'
      />
    </BottomNavigation>
  )
}

export default Footer