import { Connection } from 'mongoose';
import { DictionariesSchema } from './dictionary.schema';

export const DictionaryProviders = [
  {
    provide: 'DICTIONARY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Dictionary', DictionariesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
