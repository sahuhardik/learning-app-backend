import { Module } from '@nestjs/common';
import { CaseStudyService } from './case-study.service';
import { CaseStudyResolver } from './case-study.resolver';
import { CaseStudyProviders } from './case-study.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CaseStudyResolver, CaseStudyService, ...CaseStudyProviders],
})
export class CaseStudyModule {}
