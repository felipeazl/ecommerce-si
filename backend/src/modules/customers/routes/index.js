import express from 'express'
import {
  celebrate,
  Joi,
  Segments
} from 'celebrate'

import { createCustomer, customerLogin } from '../controllers/customer'
import loginAccountLimiter from '../../../shared/http/middlewares/rateLimit'

const customersRoute = express.Router()

customersRoute.post('/signup', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }
}), createCustomer)
customersRoute.post('/login', celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }
}), loginAccountLimiter, customerLogin)

export default customersRoute;
