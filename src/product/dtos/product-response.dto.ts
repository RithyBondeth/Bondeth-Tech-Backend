import { Exclude } from "class-transformer"
import { IsArray, IsEnum, IsInt, IsNumber, IsOptional, IsPositive, IsString, ValidateNested } from "class-validator"

export class ProductResponseDTO {
    @IsNumber()
    @IsPositive()
    id: number

    @IsString()
    name: string

    @IsString()
    description: string

    @IsNumber()
    @IsPositive()
    price: number

    @IsInt()
    @IsPositive()
    stockQty: number

    @IsArray()
    images: string[]

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    @IsString()
    category: string

    constructor(partail: Partial<ProductResponseDTO>) {
        Object.assign(this, partail)
    }
}