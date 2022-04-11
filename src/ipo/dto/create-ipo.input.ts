import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class Subscriptions {
  @Field()
  qibs: string;

  @Field()
  Nii: string;

  @Field()
  retail: string;

  @Field()
  total: string;
}

@InputType()
export class CreateIpoInput {
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

  @Field(() => Subscriptions)
  subscriptions: Subscriptions;

  @Field()
  about: string;

  @Field()
  review: string;
}
