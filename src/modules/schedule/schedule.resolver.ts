import { Resolver, Query } from '@nestjs/graphql';
import { ScheduleService } from './schedule.service';
import { NHLSchedule } from './interfaces/schedule.interface';
import { Schedule } from './dto/schedule.dto';

@Resolver(() => Schedule)
export class ScheduleResolver {
  constructor(private scheduleService: ScheduleService) {}

  @Query(() => Schedule, { name: 'schedule' })
  async getSchedule(): Promise<NHLSchedule> {
    return this.scheduleService.getSchedule();
  }
}
