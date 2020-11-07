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

@Resolver(() => Team)
export class TeamResolver {
  constructor(private teamService: TeamService) {}

  @Query(() => [Team], { name: 'teams' })
  async getAllTeams(): Promise<NHLTeam[]> {
    return this.teamService.getAllTeams();
  }

  @Query(() => Team, { name: 'team' })
  async getTeamById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<NHLTeam> {
    return this.teamService.getTeamById(id);
  }

  @ResolveField(() => [Player], { name: 'roster' })
  getRosterForTeam(@Parent() team: NHLTeam): Promise<NHLPlayer[]> {
    return this.teamService.getTeamRoster(`${team.id}`);
  }
}
