import { Module } from '@nestjs/common';
import { DbModule } from '@libs/db';
// import { ArticleModule } from './modules/article/article.module';
import { UsersModule } from './modules/users/users.module';
import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [DbModule, UsersModule, ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
