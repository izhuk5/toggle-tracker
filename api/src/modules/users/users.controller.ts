import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserCreateRequestDto } from './dto/request/user-create.request.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@/shared/guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  create(@Body() createUserDto: UserCreateRequestDto) {
    return this.usersService.create(createUserDto);
  }
}
