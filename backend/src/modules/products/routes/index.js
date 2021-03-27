import express from 'express'

import { createProduct } from '../controllers/products'

import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated'


const productsRoute = express.Router()

productsRoute.post('/', isAuthenticated, createProduct)

export default productsRoute;
