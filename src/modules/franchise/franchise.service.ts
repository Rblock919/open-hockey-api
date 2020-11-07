import { Injectable } from '@nestjs/common';

import { NHLFranchise } from './interfaces/franchise.interface';
import { DataSourcesService } from '../shared/dataSources.service';

@Injectable()
export class FranchiseService {
  constructor(private dataSources: DataSourcesService) {}

  async getAllFranchises(): Promise<NHLFranchise[]> {
    return this.dataSources.nhlStatsAPI.getAllFranchises();
  }

  async getFranchiseById(id: string): Promise<NHLFranchise> {
    return this.dataSources.nhlStatsAPI.getFranchiseById(id);
  }
}
