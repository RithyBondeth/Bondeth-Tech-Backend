import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserResponseDTO } from './dtos/user-response.dto';
import { UserPaginationDTO } from './dtos/user-pagination.dto';
import { UserCountDTO, UserCountParam } from './dtos/user-count.dto';
import { User } from 'src/entities /user.entity';

@Injectable()
export class UserService { 
    constructor(@InjectRepository(User) private userRepo: Repository<User>){}

    async findAll(pagination: UserPaginationDTO): Promise<UserResponseDTO[]> {
        const users = await this.userRepo.find({
            skip: pagination.skip,
            take: pagination.limit ?? 5
        })

        if(!users) throw new NotFoundException("There's no user in database")

        return users.map((user) => new UserResponseDTO(user))
    }

    async findOneById(userId: number): Promise<UserResponseDTO> {
        const user = await this.userRepo.findOne({
            where: { id: userId }
        })

        if(!user) throw new NotFoundException(`User with id: ${userId} not found`)

        return new UserResponseDTO(user)
    }

    async findOneByEmail(email: string): Promise<UserResponseDTO> {
        const user = await this.userRepo.findOne({
            where: {
                email: email
            }
        }) 

        if(!user) throw new NotFoundException(`User with email: ${email} not found`)

        return new UserResponseDTO(user)
    }

    async count(filter: UserCountParam): Promise<UserCountDTO> {
        const count = await this.userRepo.count({
            where: {
                UserRoles: filter.userRole
            }
        })
        return new UserCountDTO(count)
    }
}
