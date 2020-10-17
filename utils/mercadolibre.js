import axios from 'axios'

const meli = axios.create({
  baseURL: 'https://api.mercadolibre.com'
})

const mercadolibre = {
  getItemsByQuery: (q) => meli.get(`/sites/MLA/search?q=${q}`),
  getItemSummaryById: (id) => meli.get(`/items/${id}`),
  getItemDescriptionById: (id) => meli.get(`/items/${id}/description`)
}

export default mercadolibre
