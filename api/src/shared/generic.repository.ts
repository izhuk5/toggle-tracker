import { Model } from 'mongoose';
import { DeepPartial } from './utils';

export abstract class GenericRepository<Document> {
  model: Model<Document>;

  async create(data: DeepPartial<Document>) {
    const createdUser = new this.model(data);
    return createdUser.save();
  }

  async findOneById(id: string) {
    return this.model.findById(id).exec();
  }
}
