// src/user/user.schema.ts
import { Field, ObjectType, Int } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const IposSchema = new mongoose.Schema({
  logo: String,
  company: String,
  open_date: Date,
  close_date: Date,
  date_format: String,
  issue_price: String,
  ipo_size: Number,
  lot_size: Number,
  gmp: Number,
  allotment_date: Date,
  listing_date: Date,
  listing_price: String,
  listing_gains: String,
  cmp: String,
  subscriptions: {
    qibs: String,
    Nii: String,
    retail: String,
    total: String,
  },
  about: String,
  review: String,
});

IposSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

@ObjectType()
export class Subscription extends Document {
  @Field()
  qibs: string;

  @Field()
  Nii: string;

  @Field()
  retail: string;

  @Field()
  total: string;
}

@ObjectType()
export class Ipo extends Document {
  @Field()
  id: String;

  @Field()
  logo: string;

  @Field()
  company: string;

  @Field(() => Date)
  open_date: Date;

  @Field(() => Date)
  close_date: Date;

  @Field()
  date_format: string;

  @Field()
  issue_price: string;

  @Field(() => Int)
  ipo_size: number;

  @Field(() => Int)
  lot_size: number;

  @Field(() => Int)
  gmp: number;

  @Field(() => Date)
  allotment_date: Date;

  @Field(() => Date)
  listing_date: Date;

  @Field()
  listing_price: string;

  @Field()
  listing_gains: string;

  @Field()
  cmp: string;

  @Field(() => Subscription)
  subscriptions: Subscription;

  @Field()
  about: string;

  @Field()
  review: string;
}
