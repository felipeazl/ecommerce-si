import express from 'express'

import customersRoute from '../../../modules/customers/routes'

import isCustomerAuthenticated from '../middlewares/isCustomerAuthenticated'

const router = express.Router()


router.get('/authenticated', isCustomerAuthenticated, (req, res) => {
  return res.redirect('index.html')
})
router.get('/', (req, res) => {
  return res.json({
    message: "Index"
  })
})

router.use('/customers', customersRoute)

export default router;
