import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article extends Document {
  @Prop()
  title: string;

  @Prop()
  article: string;

  @Prop([String])
  images_url: string[];

  @Prop()
  video_url: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
