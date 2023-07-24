import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

const mongooseModelsForFeature = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);

@Module({
  imports: [mongooseModelsForFeature],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, JwtService],
  exports: [UsersService, UsersRepository, mongooseModelsForFeature],
})
export class UsersModule {}
