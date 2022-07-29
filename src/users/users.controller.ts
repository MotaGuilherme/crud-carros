import { User } from './shared/user';
import { UsersService } from './shared/users.service';
import { Controller, Get, Param, Body, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) { }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }


}
