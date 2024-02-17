import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true, min: 7 })
  hashPassword: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
