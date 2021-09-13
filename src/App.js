import React, { useEffect } from 'react'
import './App.css'
import MainNav from './components/MainNav/MainNav'
import BeerTable from './components/BeerTable/BeerTable'
import DataFilter from './components/DataFilter/DataFilter'
import Footer from './components/Footer/Footer'
import { getBeers } from './reducers/beerReducer/beerReducer'
import { getBeerCount } from './reducers/beerReducer/selectors/beerSelector'
import { useSelector, useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress'

const App = () => {
  const dispatch = useDispatch()
  const beerCount = useSelector(getBeerCount)

  useEffect(() => {
    dispatch(getBeers())
  }, [])

  return (
    <Box data-testid='app'>
      <MainNav />
      {beerCount > 0
        ? <Container>
          <DataFilter />
          <BeerTable />
        </Container>
        : <LinearProgress color='secondary' />
      }
      <Footer />
    </Box>
  )
}

export default App