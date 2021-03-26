import express from 'express'

import { createUser, userLogin } from '../controllers/user'
import loginAccountLimiter from '../controllers/rateLimit'


const router = express.Router()

router.post('/users/signup', createUser)
router.post('/users/login', loginAccountLimiter, userLogin)

router.get('/check', (req, res) => {
  res.json({
    result: 'success'
  })
})

export default router;
