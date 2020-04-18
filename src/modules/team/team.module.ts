import { Module } from '@nestjs/common';

import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';

@Module({
  imports: [],
  providers: [TeamService, TeamResolver],
})
export class TeamModule {}
