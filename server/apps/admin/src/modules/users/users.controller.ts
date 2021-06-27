import { UserDocument } from '@libs/db/models/user.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createOne')
  createOne(@Body() createUserDto: UserDocument) {
    return this.usersService.createOne(createUserDto);
  }
  @Get('getAll')
  getAll() {
    return this.usersService.findAll();
  }
}
