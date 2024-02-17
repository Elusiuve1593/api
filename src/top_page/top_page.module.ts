import { Module } from '@nestjs/common';
import { TopPageController } from './top_page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPage, TopPageSchema } from './schema/top_page.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TopPage.name, schema: TopPageSchema }]),
  ],
  controllers: [TopPageController],
})
export class TopPageModule {}
