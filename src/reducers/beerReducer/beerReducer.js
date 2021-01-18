import axios from 'axios'

const beerReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_BEERS':
    return action.data
  default:
    return state
  }
}

export const getBeers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      const beers = response.data.map(item =>
        ({
          id: item.id,
          abv: item.abv,
          description: item.description,
          firstBrewed: new Date(`01/${item.first_brewed}`),
          tagline: item.tagline,
          responsible: item.contributed_by,
          brewersTips: item.brewers_tips,
          foodPairing: item.food_pairing[0],
          ph: item.ph,
          image: item.image_url,
          name: item.name,
        })
      )
      console.log('beerReducer getBeers', beers)

      dispatch({
        type: 'GET_BEERS',
        data: beers
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default beerReducer