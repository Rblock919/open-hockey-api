export interface NHLFranchise {
  franchiseId: number;
  teamName: string;
  link: string;
  // the following fields aren't returned on team calls
  firstSeasonId?: number;
  mostRecentTeamId?: number;
  locationName?: string;

  // only returned on the extinct franchises
  lastSeasonId?: number;
}
