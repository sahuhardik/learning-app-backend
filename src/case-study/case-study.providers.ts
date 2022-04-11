import { Connection } from 'mongoose';
import { CaseStudiesSchema } from './case-study.schema';

export const CaseStudyProviders = [
  {
    provide: 'CASESTUDY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('CaseStudy', CaseStudiesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
