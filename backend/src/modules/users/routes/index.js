import express from 'express'

import { createUser, userLogin } from '../controllers/user'
import loginAccountLimiter from '../controllers/rateLimit'


const usersRoute = express.Router()

usersRoute.post('/users/signup', createUser)
usersRoute.post('/users/login', loginAccountLimiter, userLogin)

export default usersRoute;
