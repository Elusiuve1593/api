import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TopPageDocument = TopPage & Document;

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Items,
}

interface HeadhunterInterface {
  count: number;
  juniorSal: number;
  middleSal: number;
  seniorSal: number;
}

interface AdvantagesInterface {
  title: string;
  description: string;
}

@Schema()
export class TopPage {
  @Prop({ required: true })
  firstCategory: TopLevelCategory;

  @Prop({ required: true })
  secondCategory: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: false })
  hh?: HeadhunterInterface[];

  @Prop({ required: true })
  advantages: AdvantagesInterface[];

  @Prop({ required: false })
  seoText: string;

  @Prop({ required: true })
  tagsTitle: string;

  @Prop({ required: true })
  tags: string;
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
