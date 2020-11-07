import { Injectable } from '@nestjs/common';

import { NHLConference } from './interfaces/conference.interface';
import { DataSourcesService } from '../shared/dataSources.service';

@Injectable()
export class ConferenceService {
  constructor(private dataSources: DataSourcesService) {}

  async getAllConferences(): Promise<NHLConference[]> {
    return this.dataSources.nhlStatsAPI.getAllConferences();
  }

  async getConferenceById(id: string): Promise<NHLConference> {
    return this.dataSources.nhlStatsAPI.getConferenceById(id);
  }
}
