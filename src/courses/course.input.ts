// src/user/user.input.ts
import { Field, InputType, Int } from '@nestjs/graphql';
import { type } from 'os';

@InputType()
export class CreateCoursesInput {
  @Field(type => Int,{nullable : false})
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
