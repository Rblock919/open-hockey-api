import { Injectable } from '@nestjs/common';

import { NHLSeason } from './interfaces/season.interface';
import { DataSourcesService } from '../shared/dataSources.service';

@Injectable()
export class SeasonService {
  constructor(private dataSources: DataSourcesService) {}

  async getAllSeasons(): Promise<NHLSeason[]> {
    return this.dataSources.nhlStatsAPI.getAllSeasons();
  }

  async getSeasonById(id: string): Promise<NHLSeason> {
    return this.dataSources.nhlStatsAPI.getSeasonById(id);
  }

  async getCurrentSeason(): Promise<NHLSeason> {
    return this.dataSources.nhlStatsAPI.getCurrentSeason();
  }
}
