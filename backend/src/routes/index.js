import express from 'express'

const router = express.Router()


router.get('/check', (req, res) => {
  res.json({
    result: 'success'
  })
})

export default router;
