import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import 'dotenv/config';
import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IUserRequest {
  email: string;
  password: string;
}

interface IUserResponse {
  user: User;
  token: string;
}
class CreateSessionsService {
  public async execute({
    email,
    password,
  }: IUserRequest): Promise<IUserResponse> {
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findByEmail(email);

    if (!user) throw new AppError('User not found.', 401);

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) throw new AppError('Incorrect password', 401);

    const token = sign({}, process.env.JWT_SECRET || '', {
      subject: user.id,
      expiresIn: '1d',
    });
    return {
      user,
      token,
    };
  }
}

export default CreateSessionsService;
