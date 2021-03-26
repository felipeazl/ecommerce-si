import express from 'express'

import { createUser, userLogin } from '../controllers/user'

const router = express.Router()

router.post('/users/signup', createUser)
router.post('/users/login', userLogin)

router.get('/check', (req, res) => {
  res.json({
    result: 'success'
  })
})

export default router;
