// src/user/user.service.ts
import { Model, FilterQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Course } from './course.schema';
import { CreateCoursesInput } from './course.input';

@Injectable()
export class CourseService {
  constructor(
    @Inject('COURSE_MODEL')
    private courseModel: Model<Course>,
  ) {}

  async getCourses():Promise<Object>{
    return {
      "Name":"Course"
    }
  }

  async create(createCourseInput: CreateCoursesInput): Promise<Course> {
    return this.courseModel.create(createCourseInput);
  }

  async findOne(query: FilterQuery<Course>): Promise<Course> {
    return this.courseModel.findOne(query).lean();
  }

  async find(): Promise<Course[]> {
    return this.courseModel.find().lean();
  }
}
