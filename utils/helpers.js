export const autor = { name: 'Fernando', lastname: 'Vailanti' }

export const createFullItem = (item) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: item.price,
    decimals: 0
  },
  picture: item.pictures[0].secure_url,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
  sold_quantity: item.sold_quantity
})

export const createItemsList = (results) => {
  const formattedList = results.map((item) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 0
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
  }))
  return formattedList.slice(0, 4)
}

export const createBreadcrumb = (filters) => {
  const categories = filters.filter((e) => e.id === 'category')
  const notEmpty = categories.length
  return notEmpty ? categories[0].values[0].path_from_root.map((e) => e.name) : []
}
