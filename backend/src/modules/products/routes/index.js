import express from 'express'

import { createProduct, searchProduct, getProductsList } from '../controllers/products'

import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated'

const productsRoute = express.Router()

productsRoute.get('/:name', searchProduct)
productsRoute.get('/', getProductsList)

productsRoute.post('/', isAuthenticated, createProduct)
export default productsRoute;
