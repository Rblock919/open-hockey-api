import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Team } from './dto/team.dto';
import { NHLTeam } from './interfaces/team.interface';
import { TeamService } from './team.service';
import { DataSources } from '../../decorators/datasources.decorator';
import { HockeyDataSources } from '../../data-sources/datasources.interface';

@Resolver(of => Team)
export class TeamResolver {
  constructor(private teamService: TeamService) {}

  @Query(returns => [Team], { name: 'teams' })
  async getAllTeams(
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLTeam[]> {
    return this.teamService.getAllTeams(dataSources);
  }

  @Query(returns => Team, { name: 'team' })
  async getTeamById(
    @Args('id', { type: () => ID }) id: string,
    @DataSources() dataSources: HockeyDataSources
  ): Promise<any> {
    return this.teamService.getTeamById(id, dataSources);
  }
}
