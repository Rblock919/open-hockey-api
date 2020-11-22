import { NHLStatsAPI } from './stats-api.datasource';
import { NHLRecordsAPI } from './records-api.datasource';

// TODO: figure out if this is still needed
export interface HockeyDataSources {
  nhlStatsAPI: NHLStatsAPI;
  nhlRecordsAPI: NHLRecordsAPI;
}

export enum StatsAPIRequestTopics {
  TEAMS = 'teams',
  DIVISIONS = 'divisions',
  VENUES = 'venues',
  CONFERENCES = 'conferences',
  SEASONS = 'seasons',
  PEOPLE = 'people',
  POSITIONS = 'positions',
  FRANCHISES = 'franchises',
}

export enum RecordsAPIRequestTopics {
  ATTENDANCE = 'attendance',
}
