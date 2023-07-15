import { Body, Controller, Post } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserCreateRequestDto } from './dto/request/user-create.request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Post('/create')
  create(@Body() createUserDto: UserCreateRequestDto) {
    return this.usersRepository.create(createUserDto);
  }
}
