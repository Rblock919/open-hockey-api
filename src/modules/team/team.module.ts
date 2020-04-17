import { Module } from '@nestjs/common';
import { TeamService } from './team.service';

@Module({
  providers: [TeamService]
})
export class TeamModule {}
