import { ArticleDocument } from '@libs/db/models/article.module';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('createOne')
  createOne(@Body() createUserDto: ArticleDocument) {
    return this.articleService.createOne(createUserDto);
  }
  @Get('getAll')
  getAll() {
    return this.articleService.findAll();
  }
}
