// src/user/user.schema.ts
import { Field, ObjectType, Int } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { DictionaryStatus } from './dictionary.enum';

export const DictionariesSchema = new mongoose.Schema({
  status: String,
  keyword: String,
  definition: String,
  image: String,
  explanation: String,
});

DictionariesSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

@ObjectType()
export class Dictionary extends Document {
  @Field()
  id: String;

  @Field((type) => DictionaryStatus)
  status: DictionaryStatus;

  @Field()
  keyword: string;

  @Field()
  definition: string;

  @Field()
  image: string;

  @Field()
  explanation: string;
}
