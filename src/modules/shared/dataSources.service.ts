import { Injectable, Scope, Inject } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';

import { NHLStatsAPI } from '../../data-sources/stats-api.datasource';
import { NHLRecordsAPI } from '../../data-sources/records-api.datasource';

@Injectable({ scope: Scope.REQUEST })
export class DataSourcesService {
  // TODO find the nestjs graphql context type
  constructor(@Inject(CONTEXT) private readonly context: any) {}

  get nhlStatsAPI(): NHLStatsAPI {
    return this.context.dataSources.nhlStatsAPI;
  }

  get nhlRecordsAPI(): NHLRecordsAPI {
    return this.context.dataSources.nhlRecordsAPI;
  }
}
