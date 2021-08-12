import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Login} from './Controllers/user';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/Database/users/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, ConfigModule.forRoot(),MongooseModule.forRoot(process.env.URI,{useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true})],
  controllers: [AppController,Login],
  providers: [AppService],
})
export class AppModule {}
