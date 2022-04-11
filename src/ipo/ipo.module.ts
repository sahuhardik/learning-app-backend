import { Module } from '@nestjs/common';
import { IpoService } from './ipo.service';
import { IpoResolver } from './ipo.resolver';
import { IpoProviders } from './ipo.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [IpoResolver, IpoService, ...IpoProviders],
})
export class IpoModule {}
