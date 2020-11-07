import { Module } from '@nestjs/common';

import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';
import { PlayerModule } from '../player/player.module';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [PlayerModule, SharedModule],
  providers: [TeamService, TeamResolver],
})
export class TeamModule {}
