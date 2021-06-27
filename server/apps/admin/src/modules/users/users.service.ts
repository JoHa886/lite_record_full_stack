import { User, UserDocument } from '@libs/db/models/user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  //创建一个用户
  async createOne(createUserDto: UserDocument): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }
  //查找全部用户
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
