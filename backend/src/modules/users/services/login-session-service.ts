import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/user-repository';
import AppError from '../../../shared/errors/app-errors';
import { sign } from 'jsonwebtoken';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class LoginSessionService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) throw new AppError('User or password not found.');

    const passwordCompare = await compare(password, user.password);
    if (!passwordCompare) throw new AppError('User or password not found.');

    const secret = process.env.JWT_SECRET || '';

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: '12h',
    });
    return {
      user,
      token,
    };
  }
}

export default LoginSessionService;
