// src/user/user.resolver.ts
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateCoursesInput } from './course.input';
import { CourseService } from './course.service';
import { Course } from './course.schema';

@Resolver(() => Course)
export class CourseResolver {
  constructor(private coursesService: CourseService) {}

  @Mutation(() => Course)
  async createCourse(@Args('input') input: CreateCoursesInput) {
    return this.coursesService.create(input);
  }

  @Query(() => [Course])
  async find() {
    return this.coursesService.find();
  }
}
