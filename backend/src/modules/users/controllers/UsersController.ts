import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import CreateUsersService from '../services/CreateUsersService';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUser = new CreateUsersService();

    const user = await createUser.create({ name, email, password });

    return res.status(201).json(classToClass(user));
  }
}
