import { Connection } from 'mongoose';
import { PodcastsSchema } from './podcast.schema';

export const PodcastProviders = [
  {
    provide: 'PODCAST_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Podcast', PodcastsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
