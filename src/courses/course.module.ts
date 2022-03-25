// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { DatabaseModule } from '../database/database.module';
import { CourseProviders } from './course.providers';

@Module({
  imports: [DatabaseModule],
  providers: [CourseResolver, CourseService, ...CourseProviders],
})
export class CourseModule {}
