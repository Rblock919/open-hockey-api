import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Game } from './models/dto/game.dto';
import { GameService } from './game.service';

@Resolver(of => Game)
export class GameResolver {
  constructor(private gameService: GameService) {}

  @Query(returns => [Game], { name: 'games' })
  async getAllGames(): Promise<any[]> {
    return this.gameService.getAllGames();
  }

  @Query(returns => Game, { name: 'game' })
  async getGameById(@Args('id', { type: () => ID }) id: string): Promise<any> {
    return this.gameService.getGameById(id);
  }
}
