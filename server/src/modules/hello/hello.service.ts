import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id): any {
    if (!id) {
      return 'no';
    }
    return {
      title: 'hahaha',
      url: 'https://bj29.cn-beijing.data.alicloudccp.com/MoE13mCP%2F51134890%2F6066e080435c9fed9c11482fa0a6bdbd33f231e8%2F6066e080c83caa2dffb4454bbd52a32106a18c86?x-oss-access-key-id=LTAIsE5mAn2F493Q&x-oss-additional-headers=referer&x-oss-expires=1624609951&x-oss-process=image%2Fresize%2Cw_1920%2Fformat%2Cjpeg&x-oss-signature=EL%2FiuFb2WRoWn44BzyG7xO%2FjwtlvsQY%2BQlJjvMpXGtU%3D&x-oss-signature-version=OSS2',
    };
  }

  save(message): string {
    return `Set Hello Done.${message}`;
  }

  update(id: string, message: string): string {
    return `Update Hello Done. ${id}：${message}`;
  }

  remove(id: number): string {
    return `${id} Record Was Removed.`;
  }
}
