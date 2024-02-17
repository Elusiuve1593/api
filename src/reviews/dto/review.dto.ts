import { IsDate, IsNumber, IsString } from 'class-validator';

export class ReviewDTO {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  rating: number;
}
