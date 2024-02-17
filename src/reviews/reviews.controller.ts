import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewDTO } from './dto/review.dto';
import { ReviewsService } from './reviews.service';
import { Review } from './schema/review.schema';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  async getAllReviews(): Promise<Review[]> {
    return this.reviewsService.getAllReviews();
  }

  @Post()
  async createReview(@Body() Review: ReviewDTO): Promise<ReviewDTO> {
    return this.reviewsService.createReview(Review);
  }

  @Delete(':id')
  async deleteReview(@Param('id') id: string): Promise<Review> {
    return this.reviewsService.deleteReview(id);
  }

  @Get(':productId')
  async getByProduct(@Param('productId') productId: string): Promise<Review> {
    return this.reviewsService.getOneReview(productId);
  }
}
