import { Injectable } from '@nestjs/common';

import { HockeyDataSources } from '../../data-sources/datasources.interface';
import { NHLConference } from './interfaces/conference.interface';

@Injectable()
export class ConferenceService {
  async getAllConferences(
    dataSources: HockeyDataSources
  ): Promise<NHLConference[]> {
    return dataSources.nhlStatsAPI.getAllConferences();
  }

  async getConferenceById(
    id: string,
    dataSources: HockeyDataSources
  ): Promise<NHLConference> {
    return dataSources.nhlStatsAPI.getConferenceById(id);
  }
}
