const filterBeersByKeyword = (items, keyword) => items.filter(
  item => {
    const normalizedDescription = normalizeString(item.foodPairing)
    return normalizedDescription
      .toUpperCase()
      .includes(keyword.toUpperCase())
  })

const normalizeString = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')

export default filterBeersByKeyword