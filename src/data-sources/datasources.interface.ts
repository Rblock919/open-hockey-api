import { NHLStatsAPI } from './stats-api.datasource';
import { NHLRecordsAPI } from './records-api.datasource';

// TODO: figure out if this is still needed
export interface HockeyDataSources {
  nhlStatsAPI: NHLStatsAPI;
  nhlRecordsAPI: NHLRecordsAPI;
}
