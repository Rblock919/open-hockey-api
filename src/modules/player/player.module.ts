import { Module } from '@nestjs/common';

import { PlayerService } from './player.service';
import { PlayerResolver } from './player.resolver';

@Module({
  imports: [],
  providers: [PlayerService, PlayerResolver],
})
export class PlayerModule {}
