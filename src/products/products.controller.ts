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
import { ProductModel } from './product/product.model';
import { FindProductDTO } from './dto/find_product.dto';

@Controller('products')
export class ProductsController {
  @Post('create')
  async createProduct(
    @Body() dto: Omit<ProductModel, '_id'>,
  ): Promise<Omit<ProductModel, '_id'>> {
    return null;
  }

  @Get()
  async getProducts(): Promise<ProductModel[]> {
    return null;
  }

  @Get(':id')
  async getOneProduct(@Param('id') id: string): Promise<ProductModel> {
    return null;
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() dto: ProductModel,
  ): Promise<ProductModel> {
    return null;
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<ProductModel> {
    return null;
  }

  @HttpCode(200)
  @Post()
  async findProduct(@Body() dto: FindProductDTO): Promise<FindProductDTO> {
    return null;
  }
}
