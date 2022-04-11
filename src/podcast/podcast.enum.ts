import { registerEnumType } from '@nestjs/graphql';

export enum PodcastStatus {
  DRAFT = 'DRAFT',
  LIVE = 'LIVE',
}

registerEnumType(PodcastStatus, {
  name: 'PodcastStatus',
  description: 'All Podcast Status',
});
