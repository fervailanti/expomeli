import mercadolibre from '../utils/mercadolibre'
import { createBreadcrumb, createFullItem, createItemsList } from '../utils/creators'
import { newError } from '../utils/error'
import { autor } from '../utils/constants'
import { newSuccessful } from '../utils/successful'

export const getItemsByQuery = (req, res) => {
  const { q } = req.query
  if (q) {
    mercadolibre
      .getItemsByQuery(q)
      .then(({ data }) => {
        const { filters, results } = data
        return newSuccessful(res, 200, {
          autor,
          categories: createBreadcrumb(filters),
          items: createItemsList(results)
        })
      })
      .catch(({ response }) => {
        const { status, data } = response
        newError(res, status, data)
      })
  } else {
    newError(res, 400, 'Missing required search query param or item id')
  }
}

export const getItemById = (req, res) => {
  const { id } = req.params
  if (id) {
    const result = { autor }
    mercadolibre
      .getItemSummaryById(id)
      .then(({ data }) => {
        result.item = createFullItem(data)
        mercadolibre
          .getItemDescriptionById(id)
          .then(({ data }) => {
            result.item = { ...result.item, description: data.plain_text }
            newSuccessful(res, 200, result)
          })
          .catch(({ response }) => {
            const { status, data } = response
            newError(res, status, data)
          })
      })
      .catch(({ response }) => {
        const { status, data } = response
        newError(res, status, data)
      })
  } else {
    newError(res, 400, 'Missing required search query param or item id')
  }
}
