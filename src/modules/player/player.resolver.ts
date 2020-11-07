import {
  Resolver,
  Query,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { Team } from '../team/dto/team.dto';
import { Player } from './dto/player.dto';
import { NHLTeam } from '../team/interfaces/team.interface';
import { NHLPlayer } from './interfaces/player.interfaces';
import { PlayerService } from './player.service';
import { PlayerPosition } from './dto/player-position.dto';
import { NHLPlayerPosition } from './interfaces/player-position.interface';

@Resolver(() => Player)
export class PlayerResolver {
  constructor(private playerService: PlayerService) {}

  @Query(() => Player, { name: 'player' })
  async getPlayerById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<NHLPlayer> {
    return this.playerService.getPlayerById(id);
  }

  @Query(() => [PlayerPosition], { name: 'positions' })
  async getPlayerPositions(): Promise<NHLPlayerPosition[]> {
    return this.playerService.getPlayerPositions();
  }

  @ResolveField(() => Team, { name: 'currentTeam' })
  async getCurrentTeam(@Parent() player: NHLPlayer): Promise<NHLTeam> {
    return this.playerService.getCurrentTeam(`${player.currentTeam.id}`);
  }
}
