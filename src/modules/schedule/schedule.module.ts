import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { ScheduleService } from './schedule.service';
import { ScheduleResolver } from './schedule.resolver';

@Module({
  imports: [SharedModule],
  providers: [ScheduleService, ScheduleResolver],
})
export class ScheduleModule {}
