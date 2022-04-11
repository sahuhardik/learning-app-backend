import { Module } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { DictionaryResolver } from './dictionary.resolver';
import { DictionaryProviders } from './dictionary.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [DictionaryResolver, DictionaryService, ...DictionaryProviders],
})
export class DictionaryModule {}
