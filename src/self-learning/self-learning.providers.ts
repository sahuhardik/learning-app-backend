import { Connection } from 'mongoose';
import { SelfLearningSchema } from './self-learning.schema';

export const SelfLearningProviders = [
  {
    provide: 'SELFLEARNING_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('SelfLearning', SelfLearningSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
