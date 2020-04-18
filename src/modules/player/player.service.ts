import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerEntity } from './models/entities/player.entity';
import { CreatePlayerInput } from './models/inputs/player.input';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly PlayerRepository: Repository<PlayerEntity>
  ) {}

  async createPlayer(data: CreatePlayerInput): Promise<PlayerEntity> {
    const player = new PlayerEntity();
    player.firstName = data.firstName;
    player.lastName = data.lastName;
    player.position = data.position;
    player.shoots = data.shoots;

    await this.PlayerRepository.save(player);

    return player;
  }

  async getPlayers(): Promise<PlayerEntity[]> {
    return this.PlayerRepository.find();
  }

  async getPlayerById(id: string): Promise<PlayerEntity> {
    return this.PlayerRepository.findOne(id);
  }
}
