import { Module } from '@nestjs/common';
import { AwardService } from './award.service';
import { AwardResolver } from './award.resolver';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [AwardService, AwardResolver],
})
export class AwardModule {}
