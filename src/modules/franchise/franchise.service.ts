import { Injectable } from '@nestjs/common';

import { HockeyDataSources } from '../../data-sources/datasources.interface';
import { NHLFranchise } from './interfaces/franchise.interface';

@Injectable()
export class FranchiseService {
  async getAllFranchises(
    dataSources: HockeyDataSources
  ): Promise<NHLFranchise[]> {
    return dataSources.nhlStatsAPI.getAllFranchises();
  }

  async getFranchiseById(
    id: string,
    dataSources: HockeyDataSources
  ): Promise<NHLFranchise> {
    return dataSources.nhlStatsAPI.getFranchiseById(id);
  }
}
