import express from 'express'
import { itemsController } from '../controllers/items'

const router = express.Router()

router.get('/items', itemsController.getItemsByQuery)

export default router
