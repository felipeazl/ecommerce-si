import express from 'express'

import usersRoute from '../../../modules/users/routes'
import productsRoute from '../../../modules/products/routes'


const router = express.Router()

router.use('/', usersRoute)
router.use('/products', productsRoute)

export default router;
