export interface NHLSeason {
  seasonId: string;
  regularSeasonStartDate: string;
  regularSeasonEndDate: string;
  seasonEndDate: string;
  numberOfGames: number;
  tiesInUse: boolean;
  olympicsParticipation: boolean;
  conferencesInUse: boolean;
  divisionsInUse: boolean;
  wildCardInUse: boolean;
}
