import axios from 'axios'
import { MERCADOLIBRE_API_BASEURL } from './constants'

const meli = axios.create({
  baseURL: MERCADOLIBRE_API_BASEURL
})

const mercadolibre = {
  getItemsByQuery: (q) => meli.get(`/sites/MLA/search?q=${q}`),
  getItemSummaryById: (id) => meli.get(`/items/${id}`),
  getItemDescriptionById: (id) => meli.get(`/items/${id}/description`)
}

export default mercadolibre
