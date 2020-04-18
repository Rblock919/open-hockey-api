import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RosterService } from './roster.service';
import { RosterResolver } from './roster.resolver';
import { RosterEntity } from './models/entities/roster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RosterEntity])],
  providers: [RosterService, RosterResolver],
})
export class RosterModule {}
