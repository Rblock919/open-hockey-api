import {
  Resolver,
  Query,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { Team } from './dto/team.dto';
import { NHLTeam } from './interfaces/team.interface';
import { Player } from '../player/dto/player.dto';
import { NHLPlayer } from '../player/interfaces/player.interfaces';
import { TeamService } from './team.service';
import { DataSources } from '../../decorators/datasources.decorator';
import { HockeyDataSources } from '../../data-sources/datasources.interface';

@Resolver(() => Team)
export class TeamResolver {
  constructor(private teamService: TeamService) {}

  @Query(() => [Team], { name: 'teams' })
  async getAllTeams(
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLTeam[]> {
    return this.teamService.getAllTeams(dataSources);
  }

  @Query(() => Team, { name: 'team' })
  async getTeamById(
    @Args('id', { type: () => ID }) id: string,
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLTeam> {
    return this.teamService.getTeamById(id, dataSources);
  }

  @ResolveField(() => [Player], { name: 'roster' })
  getRosterForTeam(
    @Parent() team: NHLTeam,
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLPlayer[]> {
    return this.teamService.getTeamRoster(`${team.id}`, dataSources);
  }
}
