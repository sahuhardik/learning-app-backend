// src/user/user.schema.ts
import { Field, ObjectType, Int } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { CaseStudyStatus } from './case-study.enum';

export const CaseStudiesSchema = new mongoose.Schema({
  status: String,
  title: String,
  description: String,
  image: String,
  link: String,
});

CaseStudiesSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

@ObjectType()
export class CaseStudy extends Document {
  @Field()
  id: String;

  @Field((type) => CaseStudyStatus)
  status: CaseStudyStatus;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  link: string;
}
