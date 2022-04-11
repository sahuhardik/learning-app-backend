import { Module } from '@nestjs/common';
import { SelfLearningService } from './self-learning.service';
import { SelfLearningResolver } from './self-learning.resolver';
import { SelfLearningProviders } from './self-learning.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    SelfLearningResolver,
    SelfLearningService,
    ...SelfLearningProviders,
  ],
})
export class SelfLearningModule {}
