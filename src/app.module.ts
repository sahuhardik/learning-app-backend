// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CourseService } from './courses/course.service';
import { CourseResolver } from './courses/course.resolver';
import { CourseModule } from './courses/course.module';
import { CourseProviders } from './courses/course.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: 'schema.gql',
    }),
    CourseModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [
    CourseService,
    CourseResolver,
    ...databaseProviders,
    ...CourseProviders,
  ],
})
export class AppModule {}
