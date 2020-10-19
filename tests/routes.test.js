import request from 'supertest'
import app from '../app'

describe('Items endpoints', () => {
  it.each(['iphone', 'stereo', 'book'])(
    'Should get items correctly by search query',
    async (search) => {
      const res = await request(app).get(`/api/items?q=${search}`)
      expect(res.statusCode).toEqual(200)
      expect(res.body.autor).toEqual({ name: 'Fernando', lastname: 'Vailanti' })
      expect(Array.isArray(res.body.items)).toBe(true)
      expect(res.body.items.length).toBe(4)
      expect(Array.isArray(res.body.categories)).toBe(true)
    }
  )

  it('Should get item summary by id', async () => {
    const res = await request(app).get(`/api/items/MLA859042407`)
    expect(res.statusCode).toEqual(200)
    expect(res.body.autor).toEqual({ name: 'Fernando', lastname: 'Vailanti' })
    expect(res.body).toHaveProperty('item')
    expect(res.body.item).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        price: {
          currency: expect.any(String),
          amount: expect.any(Number),
          decimals: expect.any(Number)
        },
        picture: expect.any(String),
        condition: expect.any(String),
        free_shipping: expect.any(Boolean),
        sold_quantity: expect.any(Number),
        description: expect.any(String)
      })
    )
  })

  it('Should return error if there is no search query param or id', async () => {
    const res = await request(app).get(`/api/items`)
    expect(res.statusCode).toEqual(400)
    expect(res.body.details).toEqual('Missing required search query param or item id')
  })

  it("Should return error if item id doesn't exists", async () => {
    const res = await request(app).get(`/api/items/asdfg`)
    expect(res.statusCode).toEqual(404)
    expect(res.body.details.error).toEqual('resource not found')
  })
})
