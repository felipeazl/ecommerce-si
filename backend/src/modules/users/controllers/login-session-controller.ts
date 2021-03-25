import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import LoginSessionService from '../services/login-session-service';

class LoginSessionController {
  async session(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const loginUserService = new LoginSessionService();

    const user = await loginUserService.execute({ email, password });
    return res.status(200).json(classToClass(user));
  }
}

export default LoginSessionController;
