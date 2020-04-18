import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeasonService } from './season.service';
import { SeasonResolver } from './season.resolver';
import { SeasonEntity } from './models/entities/season.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeasonEntity])],
  providers: [SeasonService, SeasonResolver],
})
export class SeasonModule {}
