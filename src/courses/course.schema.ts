// src/user/user.schema.ts
import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const CoursesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  mentor: Number,
  havingVideos: Boolean,
  isLiveCourse: Boolean,
  basePrice: Number
});

@ObjectType()
export class Course extends Document {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;
  
  @Field()
  mentor: number;

  @Field()
  havingVideos: boolean

  @Field()
  isLiveCourse: boolean;

  @Field()
  basePrice: number;
}
