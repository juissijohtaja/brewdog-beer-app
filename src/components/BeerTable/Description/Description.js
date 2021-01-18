import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const useStyles = makeStyles({
  textWrap: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  sizeLarge: {
    width: 180,
  },
})

const Description = ({ description }) => {

  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  const handleTooltipClose = () => {
    setOpen(false)
  }

  return (
    <Box data-testid='description'>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          arrow
          title={description}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener>
          <Box
            onClick={ open ? handleTooltipClose : handleTooltipOpen }
            className={`${classes.textWrap} ${classes.sizeLarge}`}
          >
            {description}
          </Box>
        </Tooltip>
      </ClickAwayListener>
    </Box>
  )
}

export default Description