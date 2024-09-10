import { IsEnum, IsNumber, IsOptional, IsPositive } from "class-validator";
import { UserRoles } from "src/entities /user.entity";

export interface UserCountParam {
    userRole?: UserRoles
}

export class UserCountDTO {
    @IsNumber()
    @IsPositive()
    totalCount: number

    constructor(totalCount: number) {
        this.totalCount = totalCount
    }  
}

export class CountQueryParamDTO {
    @IsEnum(UserRoles, { message: "role must be either admin or user" })
    @IsOptional()
    role?: UserRoles
}