import { Module } from '@nestjs/common';
import { AwardService } from './award.service';
import { AwardResolver } from './award.resolver';

@Module({
  providers: [AwardService, AwardResolver],
})
export class AwardModule {}
