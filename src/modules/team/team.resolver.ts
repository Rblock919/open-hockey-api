import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Team } from './dto/team.dto';
import { TeamService } from './team.service';

@Resolver(of => Team)
export class TeamResolver {
  constructor(private teamService: TeamService) {}

  @Query(returns => [Team], { name: 'teams' })
  async getAllTeams(): Promise<any[]> {
    return this.teamService.getAllTeams();
  }

  @Query(returns => Team, { name: 'team' })
  async getTeamById(@Args('id', { type: () => ID }) id: string): Promise<any> {
    return this.teamService.getTeamById(id);
  }
}
