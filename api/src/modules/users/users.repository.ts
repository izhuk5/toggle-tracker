import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name)
    private readonly model: Model<UserDocument>,
  ) {}

  async create(data: any) {
    const createdUser = new this.model(data);
    return createdUser.save();
  }

  async findOneById(id: string) {
    return this.model.findById(id).exec();
  }
}
