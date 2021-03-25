import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import CreateUsersService from '../services/create-users-service';

class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const userService = new CreateUsersService();

    const user = await userService.create({ name, email, password });

    return res.status(201).json(classToClass(user));
  }
}
export default UsersController;
