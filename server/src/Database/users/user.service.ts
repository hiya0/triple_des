import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./user.repository";
import { User } from "./user.schema";
import { v4 as uuids4} from 'uuid';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository : UsersRepository) {}
    async createUser(email: string, name: string, number: number, password: string) : Promise<User> {
        return this.usersRepository.create({
            name,
            email,
            role: 'user',
            number,
            password
        })
    }

    async deleteUser(email: string): Promise<User> {
        return this.usersRepository.delete({email});
    }
}