import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../controllers/users-controller';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post(
  '/signup',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      // password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  usersController.create,
);

export default usersRouter;
