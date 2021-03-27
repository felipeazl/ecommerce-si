import express from 'express'

import { createProduct, searchProduct } from '../controllers/products'

import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated'


const productsRoute = express.Router()

productsRoute.post('/', isAuthenticated, createProduct)
productsRoute.post('/:name', searchProduct)

export default productsRoute;
