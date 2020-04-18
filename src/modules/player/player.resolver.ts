import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Player } from './models/dto/player.dto';
import { PlayerService } from './player.service';

@Resolver(of => Player)
export class PlayerResolver {
  constructor(private playerService: PlayerService) {}

  @Query(returns => [Player], { name: 'players' })
  async getAllPlayers(): Promise<any[]> {
    return this.playerService.getPlayers();
  }

  @Query(returns => Player, { name: 'player' })
  async getPlayerById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<any> {
    return this.playerService.getPlayerById(id);
  }
}
