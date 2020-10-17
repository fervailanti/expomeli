# Expomeli API 🔍

BFF (Backend For Frontend) API for searching products through MercadoLibre's services.
Online at https://expomeli.herokuapp.com/.

## Stack

The project is builded primarily with [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/), plus [ES Modules](https://github.com/standard-things/esm#readme) and [Axios](https://github.com/axios/axios).

Has communication with the following MercadoLibre APIs:

- https://api.mercadolibre.com/sites/MLA/search?q=:query.
- https://api.mercadolibre.com/items/:id.
- https://api.mercadolibre.com/items/:id/description.

## Available Scripts

In the project directory, you can run:

- `yarn start:dev`: Starts the server in watch mode with `nodemon` and `esm` (ES Modules) at [http://localhost:8000](http://localhost:8000).

- `yarn start:prod`: Used for start the server in heroku with `esm` (ES Modules) at production domain.

## Deployment

The project is hosted and deployed in heroku via GitHub Enviroment.

With a push to main it will generate a deploy to https://expomeli.herokuapp.com/.

## API Reference

The server has the following endpoints:

### `/api/items?q=:query`

Used for get a list of results items (products) from a search query. The `items` list is cut, and will only return 4 results.

#### Response:

```
{
  "author": {
    "name": String
    "lastname": String
  },
  categories: [String, String, String, ...],
  items: [
    {
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": Number
      },
      "picture": String,
      "condition": String,
      "free_shipping": Boolean
    },
    {...},
    {...},
    {...}
  ]
}
```

<br />

### `/api/items/:id`

Used for get a specific item (product) details by `id`.

#### Response:

```
{
  "autor": {
    "name": String,
    "lastname": String
  },
  "item": {
    "id": String,
    "title": String,
    "price": {
      "currency": String,
      "amount": Number,
      "decimals": Number
    },
    "picture": String,
    "condition": String,
    "free_shipping": Boolean,
    "sold_quantity": Number,
    "description": String
  }
}
```
