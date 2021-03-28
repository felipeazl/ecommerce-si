import express from 'express'
import {
  celebrate,
  Joi,
  Segments
} from 'celebrate'

import {
  createUser,
  userLogin
} from '../controllers/user'
import loginAccountLimiter from '../controllers/rateLimit'


const usersRoute = express.Router()

usersRoute.post('/users/signup', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }
}), createUser)
usersRoute.post('/users/login', celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }
}), loginAccountLimiter, userLogin)

export default usersRoute;
