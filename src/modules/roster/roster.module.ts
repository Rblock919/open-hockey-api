import { Module } from '@nestjs/common';

import { RosterService } from './roster.service';
import { RosterResolver } from './roster.resolver';

@Module({
  imports: [],
  providers: [RosterService, RosterResolver],
})
export class RosterModule {}
