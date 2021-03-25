import { Router } from 'express';
import sessionRoutes from '../../../modules/users/routes/session.routes';
import usersRouter from '../../../modules/users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/users', sessionRoutes);

export default routes;
