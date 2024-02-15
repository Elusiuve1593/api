import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TopPageModel } from './top_page/top_page.model';
import { FindTopPageDTO } from './dto/find_top_page.dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async createTopPage(
    @Body() dto: Omit<TopPageModel, '_id'>,
  ): Promise<Omit<TopPageModel, '_id'>> {
    return null;
  }

  @Get()
  async getTopPage(): Promise<TopPageModel> {
    return null;
  }

  @Get(':id')
  async getOneTopPage(@Param('id') id: string): Promise<any> {
    return null;
  }

  @Put(':id')
  async updateTopPage(
    @Param('id') id: string,
    @Body() dto: TopPageModel,
  ): Promise<TopPageModel> {
    return null;
  }

  @Delete(':id')
  async deleteTopPage(@Param('id') id: string) {
    return null;
  }

  @HttpCode(200)
  @Post()
  async findTopPage(@Body() dto: FindTopPageDTO): Promise<FindTopPageDTO> {
    return null;
  }
}
