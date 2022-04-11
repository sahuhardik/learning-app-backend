import { InputType, Int, Field } from '@nestjs/graphql';
import { PodcastStatus } from '../podcast.enum';

@InputType()
export class CreatePodcastInput {
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
