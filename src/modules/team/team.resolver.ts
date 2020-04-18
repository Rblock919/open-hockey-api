import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';

import { Team } from './dto/team.dto';
import { TeamService } from './team.service';
import { TeamEntity } from './entities/team.entity';
import { CreateTeamInput } from './inputs/team.input';

@Resolver(of => Team)
export class TeamResolver {
  constructor(private teamService: TeamService) {}

  @Query(returns => [Team], { name: 'teams' })
  async getAllTeams(): Promise<TeamEntity[]> {
    return this.teamService.getAllTeams();
  }

  @Query(returns => Team, { name: 'team' })
  async getTeamById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<TeamEntity> {
    return this.teamService.getTeamById(id);
  }

  @Mutation(returns => Team, { name: 'createTeam' })
  async submitTeam(@Args('data') data: CreateTeamInput): Promise<TeamEntity> {
    return this.teamService.createTeam(data);
  }
}
