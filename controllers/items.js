import mercadolibre from '../utils/mercadolibre'
import { autor, createFullItem, createItemsList } from '../utils/helpers'

export const getItemsByQuery = (req, res) => {
  const { q } = req.query
  mercadolibre
    .getItemsByQuery(q)
    .then(({ data }) => {
      return res.status(200).json({
        autor,
        categories: [],
        items: createItemsList(data.results)
      })
    })
    .catch((error) => {
      res.status(500)
      console.log(error)
    })
}

export const getItemById = (req, res) => {
  const { id } = req.params
  const result = { autor }
  mercadolibre
    .getItemSummaryById(id)
    .then(({ data }) => {
      result.item = createFullItem(data)
      mercadolibre
        .getItemDescriptionById(id)
        .then(({ data }) => {
          result.item = { ...result.item, description: data.plain_text }
          res.status(200).json(result)
        })
        .catch((error) => {
          res.status(500)
          console.log(error)
        })
    })
    .catch((error) => {
      res.status(500)
      console.log(error)
    })
}
