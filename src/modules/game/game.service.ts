import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GameEntity } from './models/entities/game.entity';
import { CreateGameInput } from './models/inputs/game.input';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private readonly GameRepository: Repository<GameEntity>
  ) {}

  async createGame(data: CreateGameInput): Promise<GameEntity> {
    const game = new GameEntity();
    game.name = data.name;

    await this.GameRepository.save(game);

    return game;
  }

  async getAllGames(): Promise<GameEntity[]> {
    return this.GameRepository.find();
  }

  async getGameById(id: string): Promise<GameEntity> {
    return this.GameRepository.findOne(id);
  }
}
