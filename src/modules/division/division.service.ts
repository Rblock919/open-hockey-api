import { Injectable } from '@nestjs/common';

import { NHLDivision } from './interfaces/division.interface';
import { DataSourcesService } from '../shared/dataSources.service';

@Injectable()
export class DivisionService {
  constructor(private dataSources: DataSourcesService) {}

  async getAllDivisions(): Promise<NHLDivision[]> {
    return this.dataSources.nhlStatsAPI.getAllDivisions();
  }

  async getDivisionById(id: string): Promise<NHLDivision> {
    return this.dataSources.nhlStatsAPI.getDivisionById(id);
  }
}
