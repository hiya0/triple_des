import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Login, Signup} from './Controllers/user';

@Module({
  imports: [],
  controllers: [AppController,Login,Signup],
  providers: [AppService],
})
export class AppModule {}
