import { CreatePodcastInput } from './create-podcast.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePodcastInput extends PartialType(CreatePodcastInput) {
  @Field(() => String)
  id: String;
}
