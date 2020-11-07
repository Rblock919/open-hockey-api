import { Module } from '@nestjs/common';

import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [GameService, GameResolver],
})
export class GameModule {}
