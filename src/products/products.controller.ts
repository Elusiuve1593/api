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
import { FindProductDTO } from './dto/find_product.dto';
import { ProductDTO } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  @Post('create')
  async createProduct(@Body() dto: ProductDTO): Promise<ProductDTO> {
    return null;
  }

  @Get()
  async getProducts(): Promise<ProductDTO[]> {
    return null;
  }

  @Get(':id')
  async getOneProduct(@Param('id') id: string): Promise<ProductDTO> {
    return null;
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() dto: ProductDTO,
  ): Promise<ProductDTO> {
    return null;
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<ProductDTO> {
    return null;
  }

  @HttpCode(200)
  @Post()
  async findProduct(@Body() dto: FindProductDTO): Promise<FindProductDTO> {
    return null;
  }
}
