import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import CreateUsersService from '../services/create-users-service';
import ListUserService from '../services/ListUserService';

class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return res.json(classToClass(users));
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const userService = new CreateUsersService();

    const user = await userService.create({ name, email, password });

    return res.status(201).json(classToClass(user));
  }
}
export default UsersController;
