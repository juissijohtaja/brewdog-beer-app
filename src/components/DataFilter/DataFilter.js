import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Box from '@material-ui/core/Box'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import { keywordChange, keywordReset } from '../../reducers/searchReducer/searchReducer'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    borderRadius: 4,
  },
  chipSpacing: {
    marginRight: 6
  }
}))

const DataFilter = () => {
  const dispatch = useDispatch()
  const keyword = useSelector(state => state.keyword)
  const classes = useStyles()
  const [tag, setTag] = useState('')

  const handleFilterChange = (event) => {
    dispatch(keywordChange(event.target.value))
  }
  const handleFilterClear = () => {
    dispatch(keywordReset())
  }

  const handleClickTag = (value) => {
    console.info('You clicked the Chip.')
    setTag(value)
    dispatch(keywordChange(value))
  }
  console.log('tag', tag)

  return (
    <Box marginTop={1} marginBottom={2} data-testid='data-filter'>
      <TextField
        className={classes.root}
        value={keyword}
        variant='outlined'
        onChange={handleFilterChange}
        id='searchField'
        aria-label='search'
        placeholder='Search by food pairing...'
        fullWidth
        margin='normal'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='clear filter'
                onClick={handleFilterClear}
              >
                {keyword ? <CloseIcon /> : null }
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box>
        <Chip
          label='chicken'
          color='primary'
          onClick={() => handleClickTag('chicken')}
          className={classes.chipSpacing}
        />
        <Chip
          label='crab'
          color='primary'
          onClick={() => handleClickTag('crab')}
          className={classes.chipSpacing}
        />
        <Chip
          label='burger'
          color='primary'
          onClick={() => handleClickTag('burger')}
          className={classes.chipSpacing}
        />
        <Chip
          label='spicy'
          color='primary'
          onClick={() => handleClickTag('spicy')}
          className={classes.chipSpacing}
        />
        <Chip
          label='salad'
          color='primary'
          onClick={() => handleClickTag('salad')}
          className={classes.chipSpacing}
        />
      </Box>
    </Box>
  )
}

export default DataFilter