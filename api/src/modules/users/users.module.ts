import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

const mongooseModelsForFeature = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);

@Module({
  imports: [mongooseModelsForFeature],
  controllers: [UsersController],
  providers: [UsersRepository],
  exports: [UsersRepository, mongooseModelsForFeature],
})
export class UsersModule {}
