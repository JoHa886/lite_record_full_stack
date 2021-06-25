import { resolve } from 'path';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import { StatusMonitorModule } from 'nest-status-monitor';
import statusMonitorConfig from './config/statusMonitor';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { HelloModule } from './modules/hello/hello.module';
import { ExceptionModule } from './modules/exception/exception.module';
import { RoleGuardModule } from './modules/role-guard/role-guard.module';
// import { TasksModule } from './tasks/tasks.module';//定时任务
// import { ScheduleModule } from '@nestjs/schedule';//定时任务
// import { AudioModule } from './jobs/audio/audio.module'; //redis任务队列相关
import { AlbumModule } from './modules/album/album.module';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    // TODO @nestjs/terminus almost the same
    StatusMonitorModule.setUp(statusMonitorConfig),
    AuthModule,
    HelloModule,
    ExceptionModule,
    RoleGuardModule,
    // ScheduleModule.forRoot(),
    // TasksModule,
    // AudioModule,
    AlbumModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 为 hello 路由添加中间件
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'hello', method: RequestMethod.POST })
      .forRoutes('hello');
  }
}
