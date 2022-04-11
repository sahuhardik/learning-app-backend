import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PodcastService } from './podcast.service';
import { Podcast } from './podcast.schema';
import { CreatePodcastInput } from './dto/create-podcast.input';
import { UpdatePodcastInput } from './dto/update-podcast.input';

@Resolver(() => Podcast)
export class PodcastResolver {
  constructor(private readonly podcastService: PodcastService) {}

  @Mutation(() => Podcast)
  createPodcast(
    @Args('createPodcastInput') createPodcastInput: CreatePodcastInput,
  ) {
    return this.podcastService.create(createPodcastInput);
  }

  @Query(() => [Podcast], { name: 'podcastList' })
  findAll() {
    return this.podcastService.findAll();
  }

  @Query(() => Podcast, { name: 'podcast' })
  findOne(@Args('id', { type: () => String }) id: String) {
    return this.podcastService.findOne(id);
  }

  @Mutation(() => Podcast)
  updatePodcast(
    @Args('updatePodcastInput') updatePodcastInput: UpdatePodcastInput,
  ) {
    return this.podcastService.update(
      updatePodcastInput.id,
      updatePodcastInput,
    );
  }

  @Mutation(() => Podcast)
  removePodcast(@Args('id', { type: () => String }) id: String) {
    return this.podcastService.remove(id);
  }
}
