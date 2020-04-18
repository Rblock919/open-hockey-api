import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { GameEntity } from './models/entities/game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameEntity])],
  providers: [GameService, GameResolver],
})
export class GameModule {}
