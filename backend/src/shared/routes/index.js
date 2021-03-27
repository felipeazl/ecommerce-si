import express from 'express'

import usersRoute from '../../modules/users/routes'


const router = express.Router()

router.use('/', usersRoute)

export default router;
