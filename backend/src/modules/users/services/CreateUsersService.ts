import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/app-errors';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/user-repository';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUsersService {
  public async create({ name, email, password }: IUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findByEmail(email);
    if (userExists) throw new AppError('User alreay exists');

    const hashedPassword = await hash(password, 12);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    await usersRepository.save(user);

    return user;
  }
}

export default CreateUsersService;
