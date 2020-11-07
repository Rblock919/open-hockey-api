import { Injectable } from '@nestjs/common';

import { NHLVenue } from './interfaces/venue.interface';
import { DataSourcesService } from '../shared/dataSources.service';

@Injectable()
export class VenueService {
  constructor(private dataSources: DataSourcesService) {}

  async getAllVenues(): Promise<NHLVenue[]> {
    return this.dataSources.nhlStatsAPI.getAllVenues();
  }

  async getVenueById(id: string): Promise<NHLVenue> {
    return this.dataSources.nhlStatsAPI.getVenueById(id);
  }
}
