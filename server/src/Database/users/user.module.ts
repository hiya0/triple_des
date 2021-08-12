import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersRepository } from './user.repository';
import { User, UserSchema } from './user.schema';
import { UsersService } from './user.service';
import { Signup, DeleteUser } from './users.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
    controllers: [Signup, DeleteUser],
    providers: [UsersService,UsersRepository]
})

export class UsersModule {}