import { Body, Controller, Delete, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "../dto/createUser";
import { User } from "./user.schema";
import { UsersService } from "./user.service";

@Controller('signup')
export class Signup {
    constructor(private readonly usersServices: UsersService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        const {name, email, number, password} = createUserDto
        return this.usersServices.createUser(email,name,number,password)
    }
}

@Controller('deleteUser')
export class DeleteUser {
    constructor(private readonly usersServices: UsersService) {}

    @Delete(':userEmail')
    async deleteUser(@Param('userEmail') email:string): Promise<User> {
        return this.usersServices.deleteUser(email);
    }
}