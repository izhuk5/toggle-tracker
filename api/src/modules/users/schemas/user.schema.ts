import { GenericSchema } from '@/shared/schemas/generic.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema({ timestamps: true })
export class User extends GenericSchema {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
