import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';

import { Player } from './models/dto/player.dto';
import { PlayerService } from './player.service';
import { PlayerEntity } from './models/entities/player.entity';
import { CreatePlayerInput } from './models/inputs/player.input';

@Resolver(of => Player)
export class PlayerResolver {
  constructor(private playerService: PlayerService) {}

  @Query(returns => [Player], { name: 'players' })
  async getAllPlayers(): Promise<PlayerEntity[]> {
    return this.playerService.getPlayers();
  }

  @Query(returns => Player, { name: 'player' })
  async getPlayerById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<PlayerEntity> {
    return this.playerService.getPlayerById(id);
  }

  @Mutation(returns => Player, { name: 'createPlayer' })
  async submitPlayer(
    @Args('data') data: CreatePlayerInput
  ): Promise<PlayerEntity> {
    return this.playerService.createPlayer(data);
  }
}
