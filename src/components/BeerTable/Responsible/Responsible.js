import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  avatarResponsible: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
    fontSize: '0.8em',
    fontWeight: 600,
    color: grey[50],
    backgroundColor: theme.palette.secondary.main,
    display: 'inline-flex',
    marginRight: 8,
  },
}))

const Responsible = ({ responsible }) => {
  const classes = useStyles()

  return (
    <Box>
      <Avatar className={classes.avatarResponsible}>
        {responsible.split(' ').map(n => n[0]).join('').substring(0, 2)}
      </Avatar> {responsible}
    </Box>
  )
}

export default Responsible