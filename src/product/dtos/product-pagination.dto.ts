import { IsNumber, IsOptional, IsPositive } from "class-validator"

export class ProductPaginationDTO {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    skip: number

    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit: number
}