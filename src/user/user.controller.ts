import { BadRequestException, Controller, Get, Param, ParseEnumPipe, ParseIntPipe, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResponseDTO } from './dtos/user-response.dto';
import { UserPaginationDTO } from './dtos/user-pagination.dto';
import { CountQueryParamDTO, UserCountDTO } from './dtos/user-count.dto';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(
    @Query() pagination: UserPaginationDTO
  ): Promise<UserResponseDTO[]> {
    return this.userService.findAll(pagination)
  }

  @Get("count")
  count(@Query() count: CountQueryParamDTO): Promise<UserCountDTO> {
    const filter = { userRole: count.role }
    return this.userService.count(filter)
  } 

  @Get("id/:id")
  findOneById(@Param("id", ParseIntPipe) userId: number): Promise<UserResponseDTO> {
    return this.userService.findOneById(userId)
  }

  @Get("email/:email")
  findOneByEmail(@Param("email") email: string): Promise<UserResponseDTO> {
    return this.userService.findOneByEmail(email)
  }
}