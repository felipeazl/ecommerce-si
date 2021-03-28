import express from 'express'

import usersRoute from '../../../modules/users/routes'
import customersRoute from '../../../modules/customers/routes'
import productsRoute from '../../../modules/products/routes'


const router = express.Router()

router.use('/', usersRoute)
router.use('/customers', customersRoute)
router.use('/products', productsRoute)

export default router;
