import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { GenericRepository } from '@/shared/generic.repository';

@Injectable()
export class UsersRepository extends GenericRepository<UserDocument> {
  constructor(
    @InjectModel(User.name)
    model: Model<UserDocument>,
  ) {
    super();
    this.model = model;
  }
}
