import { Article, ArticleDocument } from '@libs/db/models/article.module';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private articleModel: Model<ArticleDocument>,
  ) {}

  //创建一个用户
  async createOne(createUserDto: ArticleDocument): Promise<Article> {
    const createdUser = new this.articleModel(createUserDto);
    return await createdUser.save();
  }
  //查找全部用户
  findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }
}
