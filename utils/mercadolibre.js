import axios from 'axios'

const mercadolibre = {
  searchResultsByQuery: (q) => axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
}

export default mercadolibre
