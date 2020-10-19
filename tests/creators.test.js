import { createBreadcrumb, createFullItem, createItemsList } from '../utils/creators'

const mockGrossItem = {
  id: 'abc123',
  title: 'iPhone 11',
  currency_id: 'ARS',
  pictures: [{ secure_url: 'img_url_1' }, { secure_url: 'img_url_2' }],
  condition: 'new',
  sold_quantity: 5,
  shipping: { free_shipping: true },
  price: 85500.45
}

const mockGrossResults = Array(6)
  .fill()
  .map(() => ({
    id: 'abc123',
    title: 'iPhone 11',
    currency_id: 'ARS',
    thumbnail: 'thumbnail_img',
    condition: 'new',
    shipping: { free_shipping: true },
    price: 85500.45
  }))

const mockGrossFilters = [
  {
    id: 'category',
    values: [{ path_from_root: [{ name: 'Apple' }, { name: 'iPhone' }] }]
  },
  {
    id: 'another_filter',
    values: ['test']
  }
]

describe('utils / creators', () => {
  it('Should create breadcrumb array in expected format', () => {
    expect(createBreadcrumb(mockGrossFilters)).toEqual(['Apple', 'iPhone'])
  })

  it('Should create full item in expected format', () => {
    expect(createFullItem(mockGrossItem)).toEqual({
      id: 'abc123',
      title: 'iPhone 11',
      price: {
        currency: 'ARS',
        amount: 85500,
        decimals: 45
      },
      picture: 'img_url_1',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5
    })
  })

  it('Should create items list in expected format', () => {
    expect(createItemsList(mockGrossResults)).toEqual(
      Array(4)
        .fill()
        .map(() => ({
          id: 'abc123',
          title: 'iPhone 11',
          price: {
            currency: 'ARS',
            amount: 85500,
            decimals: 45
          },
          picture: 'thumbnail_img',
          condition: 'new',
          free_shipping: true
        }))
    )
  })
})
