import { Controller, Post, Param } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Controller('users')
export class UsersController {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Post()
  findsById() {
    return this.usersRepository.create({
      email: 'test@gmail.com',
      password: '123456',
    });
  }
}
