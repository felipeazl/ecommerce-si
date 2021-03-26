import express from 'express'

import { createUser } from '../controllers/user'

const router = express.Router()

router.post('/users', createUser)

router.get('/check', (req, res) => {
  res.json({
    result: 'success'
  })
})

export default router;
