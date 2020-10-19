const splitPrice = (price) =>
  price
    .toFixed(2)
    .toString()
    .split('.')
    .map((str) => parseInt(str))

export const createFullItem = (item) => {
  const [amount, decimals] = splitPrice(item.price)
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount,
      decimals
    },
    picture: item.pictures[0].secure_url,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity
  }
}

export const createItemsList = (results) => {
  return results
    .map((item) => {
      const [amount, decimals] = splitPrice(item.price)
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount,
          decimals
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      }
    })
    .slice(0, 4)
}

export const createBreadcrumb = (filters) => {
  const categories = filters.filter((e) => e.id === 'category')
  const notEmpty = categories.length
  return notEmpty ? categories[0].values[0].path_from_root.map((e) => e.name) : []
}
