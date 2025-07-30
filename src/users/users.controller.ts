import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from "./users.service"
import { User } from './userModle';
import { Roles } from '../auth/roles.decorator';


@Controller('users')
export class UsersController {
    constructor(private readonly AppService: UsersService) { }

    @Get()
    getAllUser() {
        return this.AppService.getAllUsers();
    }

    @Post()
    @Roles('commander')
    addUser(@Body() user: User) {
        this.AppService.addUser(user)
        return "user add"
    }
}
