import express from 'express'
import helmet from 'helmet'
import itemsRouter from './routes/items'
// import bodyParser from 'body-parser'

const port = process.env.PORT || 3000

const app = express()

const setHeaders = (_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
}

// app.use(bodyParser.json())
app.use(setHeaders)
app.use(helmet())
app.use('/api', itemsRouter)

app.listen(port)
