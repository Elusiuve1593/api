import { IsArray, IsNumber, IsString } from 'class-validator';

interface CharacteristicsInterface {
  name: string;
  value: string;
}

export class ProductDTO {
  @IsString()
  image: string;
    
  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsNumber()
  oldPrice: number;

  @IsNumber()
  credit: number;

  @IsNumber()
  calculatedRaring: number;

  @IsString()
  description: string;

  @IsString()
  advantages: string;

  @IsString()
  disAdvantages: string;

  @IsArray()
  categories: string[];

  @IsArray()
  tags: string[];

  @IsArray()
  characteristics: CharacteristicsInterface[];
}
