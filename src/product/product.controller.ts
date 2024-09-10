import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResponseDTO } from './dtos/product-response.dto';
import { ProductPaginationDTO } from './dtos/product-pagination.dto';

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(
    @Query() pagination: ProductPaginationDTO
  ): Promise<ProductResponseDTO[]> {
    return this.productService.findAll(pagination)
  }

  @Get("/id/:id")
  findOneById(@Param("id", ParseIntPipe) productId: number): Promise<ProductResponseDTO> {
    return this.productService.findOneById(productId)
  }

  @Get("/name/:name") 
  findOneByName(@Param("name") productName: string): Promise<ProductResponseDTO> {
    return this.productService.findOneByName(productName)
  }

  @Post()
  create(@Body() body) {

  } 
}
