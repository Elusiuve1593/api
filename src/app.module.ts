import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { TopPageModule } from './top_page/top_page.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [AuthModule, TopPageModule, ProductsModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
