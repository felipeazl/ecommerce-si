import express from 'express'
import {
  celebrate,
  Joi,
  Segments
} from 'celebrate'

import { createProduct, searchProduct, getProductsList } from '../controllers/products'

import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated'

const productsRoute = express.Router()

productsRoute.get('/:title', searchProduct)
productsRoute.get('/', getProductsList)

productsRoute.post('/', celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required(),
  }
}),isAuthenticated, createProduct)
export default productsRoute;
