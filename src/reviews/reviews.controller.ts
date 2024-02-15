import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './reviews/review.model';

@Controller('reviews')
export class ReviewsController {
  @Post('create')
  async createReview(
    @Body() dto: Omit<ReviewModel, '_id'>,
  ): Promise<Omit<ReviewModel, '_id'>> {
    return null;
  }

  @Delete(':id')
  async deleteReview(@Param('id') id: string): Promise<any> {
    return null;
  }

  @Get(':productId')
  async getByProduct(@Param('productId') productId: string): Promise<any> {
    return null;
  }
}
