import { Module } from '@nestjs/common';

import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';
import { PlayerModule } from '../player/player.module';

@Module({
  imports: [PlayerModule],
  providers: [TeamService, TeamResolver],
})
export class TeamModule {}
