import { Injectable } from '@nestjs/common';

import { HockeyDataSources } from '../../data-sources/datasources.interface';
import { NHLDivision } from './interfaces/division.interface';

@Injectable()
export class DivisionService {
  async getAllDivisions(
    dataSources: HockeyDataSources
  ): Promise<NHLDivision[]> {
    return dataSources.nhlStatsAPI.getAllDivisions();
  }

  async getDivisionById(
    id: string,
    dataSources: HockeyDataSources
  ): Promise<NHLDivision> {
    return dataSources.nhlStatsAPI.getDivisionById(id);
  }
}
