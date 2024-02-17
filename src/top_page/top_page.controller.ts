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
import { TopPageDTO } from './dto/top_page.dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async createTopPage(@Body() dto: TopPageDTO): Promise<any> {
    return null;
  }

  @Get()
  async getTopPage(): Promise<any> {
    return null;
  }

  @Get(':id')
  async getOneTopPage(@Param('id') id: string): Promise<any> {
    return null;
  }

  @Put(':id')
  async updateTopPage(
    @Param('id') id: string,
    @Body() dto: TopPageDTO,
  ): Promise<any> {
    return null;
  }

  @Delete(':id')
  async deleteTopPage(@Param('id') id: string) {
    return null;
  }

  @HttpCode(200)
  @Post()
  async findTopPage(@Body() dto: TopPageDTO): Promise<any> {
    return null;
  }
}
