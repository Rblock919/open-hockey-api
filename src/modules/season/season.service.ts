import { Injectable } from '@nestjs/common';

import { NHLSeason } from './interfaces/season.interface';
import { HockeyDataSources } from '../../data-sources/datasources.interface';

@Injectable()
export class SeasonService {
  async getAllSeasons(dataSources: HockeyDataSources): Promise<NHLSeason[]> {
    return dataSources.nhlStatsAPI.getAllSeasons();
  }

  async getSeasonById(
    id: string,
    dataSources: HockeyDataSources
  ): Promise<NHLSeason> {
    return dataSources.nhlStatsAPI.getSeasonById(id);
  }

  async getCurrentSeason(dataSources: HockeyDataSources): Promise<NHLSeason> {
    return dataSources.nhlStatsAPI.getCurrentSeason();
  }
}
