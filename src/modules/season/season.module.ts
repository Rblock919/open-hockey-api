import { Module } from '@nestjs/common';

import { SeasonService } from './season.service';
import { SeasonResolver } from './season.resolver';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [SeasonService, SeasonResolver],
})
export class SeasonModule {}
