import { Prop } from '@nestjs/mongoose';
import { v4 } from 'uuid';

export abstract class GenericSchema {
  @Prop({ type: String, default: v4, unique: true })
  _id: string;

  @Prop({ type: Number })
  createdAt: number;

  @Prop({ type: Number })
  updatedAt: number;
}
