// src/user/user.schema.ts
import { Field, ObjectType, Int } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const SelfLearningSchema = new mongoose.Schema({
  topic: String,
  description: String,
  image: String,
  videoId: Number,
  explanation: String,
  quizId: String,
});

SelfLearningSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

@ObjectType()
export class SelfLearning extends Document {
  @Field()
  id: String;

  @Field()
  topic: String;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  videoId: Number;

  @Field()
  explanation: string;

  @Field()
  quizId: string;
}
