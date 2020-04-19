import { NHLStatsAPI } from './stats-api.datasource';
import { NHLRecordsAPI } from './records-api.datasource';

export interface HockeyDataSources {
  nhlStatsAPI: NHLStatsAPI;
  nhlRecordsAPI: NHLRecordsAPI;
}
