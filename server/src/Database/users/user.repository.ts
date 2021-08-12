import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { User, UserDoc } from "./user.schema";

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDoc>) {}

    async create(user: User): Promise<User> {
        const newUser = new this.userModel(user)
        return await newUser.save()
    }

    async delete(userFilterQuery: FilterQuery<UserDoc>): Promise<User> {
        return this.userModel.findOneAndDelete(userFilterQuery);
    }
}