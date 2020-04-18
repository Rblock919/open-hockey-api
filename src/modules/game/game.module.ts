import { Module } from '@nestjs/common';

import { GameService } from './game.service';
import { GameResolver } from './game.resolver';

@Module({
  imports: [],
  providers: [GameService, GameResolver],
})
export class GameModule {}
