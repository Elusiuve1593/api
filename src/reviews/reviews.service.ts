import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from './schema/review.schema';
import { Model, Types } from 'mongoose';
import { ReviewDTO } from './dto/review.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
  ) {}

  async getAllReviews(): Promise<Review[]> {
    return this.reviewModel.find().exec();
  }

  async createReview(Review: ReviewDTO): Promise<Review> {
    return this.reviewModel.create(Review);
  }

  async deleteReview(id: string): Promise<Review> {
    return this.reviewModel.findByIdAndDelete(id);
  }

  async getOneReview(id: string): Promise<Review> {
    return this.reviewModel.findById(id).exec();
  }
}
