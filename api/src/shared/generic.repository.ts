import { Model } from 'mongoose';
import { DeepPartial } from './utils';

export abstract class GenericRepository<Document> {
  model: Model<Document>;

  async create(data: DeepPartial<Document>) {
    const model = new this.model(data);
    return model.save();
  }

  async findById(id: string) {
    return this.model.findById(id).exec();
  }
}
