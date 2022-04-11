// src/user/user.schema.ts
import { Field, ObjectType, Int } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { PodcastStatus } from './podcast.enum';

export const PodcastsSchema = new mongoose.Schema({
  status: String,
  title: String,
  description: String,
  image: String,
  audio: String,
  video: String,
  duration: Number,
});

PodcastsSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

@ObjectType()
export class Podcast extends Document {
  @Field()
  id: String;

  @Field((type) => PodcastStatus)
  status: PodcastStatus;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  audio: string;

  @Field()
  video: string;

  @Field(() => Int)
  duration: number;
}
