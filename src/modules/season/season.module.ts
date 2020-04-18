import { Module } from '@nestjs/common';

import { SeasonService } from './season.service';
import { SeasonResolver } from './season.resolver';

@Module({
  imports: [],
  providers: [SeasonService, SeasonResolver],
})
export class SeasonModule {}
