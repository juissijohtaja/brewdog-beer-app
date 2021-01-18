const sortBeersByDate = (beers, orderDesc) => beers.sort((a, b) => {
  const dateA = new Date(a.firstBrewed)
  const dateB = new Date(b.firstBrewed)
  return orderDesc ? dateB - dateA : dateA - dateB
})

export default sortBeersByDate