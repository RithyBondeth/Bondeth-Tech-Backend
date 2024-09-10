import { IsNumber, IsOptional, IsPositive } from "class-validator"

export class UserPaginationDTO {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    skip: number

    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit: number
}