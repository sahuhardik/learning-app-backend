import { Connection } from 'mongoose';
import { CoursesSchema } from './course.schema';

export const CourseProviders = [
  {
    provide: 'COURSE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Course', CoursesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
