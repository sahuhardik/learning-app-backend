import { Module } from '@nestjs/common';
import { PodcastService } from './podcast.service';
import { PodcastResolver } from './podcast.resolver';
import { PodcastProviders } from './podcast.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PodcastResolver, PodcastService, ...PodcastProviders],
})
export class PodcastModule {}
