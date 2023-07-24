import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterRequestDto } from './dto/request/register.request.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private generateToken(payload: { email: string; _id: string }) {
    return this.jwtService.signAsync(payload, {
      secret: 'fdsjhgfdkhjgdfhjks',
    });
  }

  async register(registerDto: RegisterRequestDto) {
    const user = await this.usersService.create(registerDto);
    const token = await this.generateToken({
      email: user.email,
      _id: user._id,
    });

    return token;
  }

  // async signIn(username, pass) {
  //   const user = await this.usersService.findById(username);
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }
  //   const payload = { sub: user.userId, username: user.username };
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   };
  // }
}
