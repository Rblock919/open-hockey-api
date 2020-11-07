import { Module } from '@nestjs/common';

import { PlayerService } from './player.service';
import { PlayerResolver } from './player.resolver';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [PlayerService, PlayerResolver],
  exports: [PlayerService],
})
export class PlayerModule {}
