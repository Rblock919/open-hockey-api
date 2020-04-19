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
import { NHLPlayer } from './interfaces/player.interfaces';
import { PlayerService } from './player.service';
import { PlayerPosition } from './dto/player-position.dto';
import { DataSources } from '../../decorators/datasources.decorator';
import { HockeyDataSources } from '../../data-sources/datasources.interface';
import { NHLPlayerPosition } from './interfaces/player-position.interface';
import { NHLTeam } from '../team/interfaces/team.interface';

@Resolver(of => Player)
export class PlayerResolver {
  constructor(private playerService: PlayerService) {}

  @Query(returns => Player, { name: 'player' })
  async getPlayerById(
    @Args('id', { type: () => ID }) id: string,
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLPlayer> {
    return this.playerService.getPlayerById(id, dataSources);
  }

  @Query(returns => [PlayerPosition], { name: 'positions' })
  async getPlayerPositions(
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLPlayerPosition[]> {
    return this.playerService.getPlayerPositions(dataSources);
  }

  @ResolveField(returns => Team, { name: 'currentTeam' })
  async getCurrentTeam(
    @Parent() player: NHLPlayer,
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLTeam> {
    return this.playerService.getCurrentTeam(
      `${player.currentTeam.id}`,
      dataSources
    );
  }
}
