import mercadolibre from '../utils/mercadolibre'

export const itemsController = {
  getItemsByQuery: (req, res) => {
    const { q: search } = req.query
    mercadolibre
      .searchResultsByQuery(search)
      .then(({ data }) => {
        return res.status(200).json({
          autor: { name: 'Fernando', lastname: 'Vailanti' },
          categories: ['demo', 'demo'],
          items: data.results
        })
      })
      .catch((err) => {
        res.status(500)
        console.log(err)
      })
  }
}
