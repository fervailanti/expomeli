import express from 'express'
import * as itemsController from '../controllers/items'

const router = express.Router()

router.get('/items', itemsController.getItemsByQuery)
router.get('/items/:id', itemsController.getItemById)

export default router
