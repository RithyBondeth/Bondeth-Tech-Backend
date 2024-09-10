import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductResponseDTO } from './dtos/product-response.dto';
import { ProductPaginationDTO } from './dtos/product-pagination.dto';
import { Product } from 'src/entities /product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepo: Repository<Product>) {}

    async findAll(pagination: ProductPaginationDTO): Promise<ProductResponseDTO[]> {
        const products = await this.productRepo.find({
            relations: ["category", "images"],
            skip: pagination.skip,
            take: pagination.limit
        })

        if(!products) throw new NotFoundException("There's no product in database")
    
        return products.map((product) => new ProductResponseDTO({
            ...product,
            images: product.images?.map((img) => img.imageUrl) || [],
            category: product.category.name
        }))
    }

    async findOneById(productId: number): Promise<ProductResponseDTO> {
        const product = await this.productRepo.findOne({
            relations: ["category", "images"],
            where: { id:productId }
        })

        if(!product) throw new NotFoundException(`Product with id ${productId} not found`)

        const newProduct = {
            ...product,
            images: product.images?.map((img) => img.imageUrl) || [],
            category: product.category.name
        }

        return new ProductResponseDTO(newProduct)
    }

    async findOneByName(productName: string): Promise<ProductResponseDTO> {
        const product = await this.productRepo.findOne({
            relations: ["category", "images"],
            where: { name: productName }
        })

        if(!product) throw new NotFoundException(`Product with name ${productName} not found`)            

        const newProduct = {
            ...product,
            images: product.images?.map((img) => img.imageUrl) || [],
            category: product.category.name
        }

        return new ProductResponseDTO(newProduct)
    }

    async create(body) {
        
    }
}
