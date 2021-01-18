const beerTableColumns = [
  {
    id: 'image',
    label: '',
    minWidth: 40,
  },
  {
    id: 'name',
    label: 'Beer',
    minWidth: 240
  },
  {
    id: 'abv',
    label: 'ABV',
    minWidth: 80,
    align: 'right',
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 180
  },
  {
    id: 'firstBrewed',
    label: 'First Brewed',
    minWidth: 160,
    align: 'right',
    sortable: true
  },
  {
    id: 'tagline',
    label: 'Tagline',
    minWidth: 140,
  },
  {
    id: 'brewersTips',
    label: 'Brewers Tips',
    minWidth: 180,
  },
  {
    id: 'ph',
    label: 'pH',
    minWidth: 60,
    align: 'right',
  },
  {
    id: 'foodPairing',
    label: 'Food Pairing',
    minWidth: 180,
  },
]

export default beerTableColumns