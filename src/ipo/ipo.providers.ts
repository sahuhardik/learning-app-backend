import { Connection } from 'mongoose';
import { IposSchema } from './ipo.schema';

export const IpoProviders = [
  {
    provide: 'IPO_MODEL',
    useFactory: (connection: Connection) => connection.model('Ipo', IposSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
