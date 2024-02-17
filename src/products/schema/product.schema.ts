import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

interface CharacteristicsInterface {
  name: string;
  value: string;
}

@Schema()
export class Product {
  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  oldPrice: number;

  @Prop({ required: true })
  credit: number;

  @Prop({ required: true })
  calculatedRaring: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  advantages: string;

  @Prop({ required: true })
  disAdvantages: string;

  @Prop({ required: true })
  @Prop([String])
  categories: string[];

  @Prop({ required: true })
  @Prop([String])
  tags: string[];

  @Prop({ required: true })
  @Prop([String])
  characteristics: CharacteristicsInterface[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
