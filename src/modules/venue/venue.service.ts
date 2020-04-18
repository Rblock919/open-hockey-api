import { Injectable } from '@nestjs/common';

import { HockeyDataSources } from '../../data-sources/datasources.interface';
import { NHLVenue } from './interfaces/venue.interface';

@Injectable()
export class VenueService {
  async getAllVenues(dataSources: HockeyDataSources): Promise<NHLVenue[]> {
    return dataSources.nhlStatsAPI.getAllVenues();
  }

  async getVenueById(
    id: string,
    dataSources: HockeyDataSources
  ): Promise<NHLVenue> {
    return dataSources.nhlStatsAPI.getVenueById(id);
  }
}
