import express from 'express'

import usersRoute from '../../../modules/users/routes'
import customersRoute from '../../../modules/customers/routes'
import productsRoute from '../../../modules/products/routes'

import isCustomerAuthenticated from '../middlewares/isCustomerAuthenticated'


const router = express.Router()


router.get('/authenticated', isCustomerAuthenticated, (req, res) => {
  return res.json({
    message: "User authenticated"
  })
})
router.get('/', (req, res) => {
  return res.json({
    message: "Index"
  })
})

router.use('/users', usersRoute)
router.use('/customers', customersRoute)
router.use('/products', productsRoute)

export default router;
