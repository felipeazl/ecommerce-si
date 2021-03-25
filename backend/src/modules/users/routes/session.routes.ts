import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import LoginSessionController from '../controllers/login-session-controller';

const sessionRoutes = Router();
const loginController = new LoginSessionController();

sessionRoutes.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  loginController.session,
);
export default sessionRoutes;
