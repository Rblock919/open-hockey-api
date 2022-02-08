import { Injectable } from '@nestjs/common';

import { DataSourcesService } from '../shared/dataSources.service';
import { NHLSchedule } from './interfaces/schedule.interface';

@Injectable()
export class ScheduleService {
  constructor(private dataSources: DataSourcesService) {}

  async getSchedule(): Promise<NHLSchedule> {
    return this.dataSources.nhlStatsAPI.getSchedule();
  }
}
