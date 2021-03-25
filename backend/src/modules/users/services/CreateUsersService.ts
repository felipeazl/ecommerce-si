import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUsersService {
  public async create({ name, email, password }: IUserRequest): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    const userExists = await userRepository.findByEmail(email);

    if (userExists) throw new AppError('User already exists');

    const hashPassword = await hash(password, 12);

    const user = userRepository.create({ name, email, password: hashPassword });
    await userRepository.save(user);

    return user;
  }
}

export default CreateUsersService;
