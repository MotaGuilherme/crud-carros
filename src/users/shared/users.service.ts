import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async getByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }
  
  async create(user: User) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

}
