import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';

import { Game } from './models/dto/game.dto';
import { GameEntity } from './models/entities/game.entity';
import { GameService } from './game.service';
import { CreateGameInput } from './models/inputs/game.input';

@Resolver(of => Game)
export class GameResolver {
  constructor(private gameService: GameService) {}

  @Query(returns => [Game], { name: 'games' })
  async getAllGames(): Promise<GameEntity[]> {
    return this.gameService.getAllGames();
  }

  @Query(returns => Game, { name: 'game' })
  async getGameById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<GameEntity> {
    return this.gameService.getGameById(id);
  }

  @Mutation(returns => Game, { name: 'createGame' })
  async submitGame(@Args('data') data: CreateGameInput): Promise<GameEntity> {
    return this.gameService.createGame(data);
  }
}
