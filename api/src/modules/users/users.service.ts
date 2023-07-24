import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';
import { UserCreateRequestDto } from './dto/request/user-create.request.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createDto: UserCreateRequestDto) {
    const password = await bcrypt.hash(createDto.password, 10);

    return this.usersRepository.create({ ...createDto, password });
  }
}
