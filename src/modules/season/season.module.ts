import { Module } from '@nestjs/common';
import { SeasonService } from './season.service';

@Module({
  providers: [SeasonService],
})
export class SeasonModule {}
