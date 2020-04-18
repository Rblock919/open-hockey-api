import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlayerService } from './player.service';
import { PlayerResolver } from './player.resolver';
import { PlayerEntity } from './models/entities/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity])],
  providers: [PlayerService, PlayerResolver],
})
export class PlayerModule {}
