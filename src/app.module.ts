import { CarsModule } from './cars/cars.module';
import { CarsController } from './cars/cars.controller';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CarsModule,
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.mq4xf.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
  ],
  controllers: [
    CarsController, AppController],
  providers: [AppService],
})
export class AppModule { }
