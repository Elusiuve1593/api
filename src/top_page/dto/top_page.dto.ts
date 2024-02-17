import { IsArray, IsEnum, IsString } from 'class-validator';

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

export class TopPageDTO {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;

  @IsString()
  secondCategory: string;

  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsArray()
  hh?: HeadhunterInterface[];

  @IsArray()
  advantages: AdvantagesInterface[];

  @IsString()
  seoText: string;

  @IsString()
  tagsTitle: string;

  @IsString()
  tags: string;
}
