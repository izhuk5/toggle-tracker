import { Body, Controller, Post } from '@nestjs/common';
import { RegisterRequestDto } from './dto/request/register.request.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() registerDto: RegisterRequestDto) {
    return this.authService.register(registerDto);
  }
}
