export interface NHLConference {
  id: number;
  name: string;
  link: string;

  // the following aren't returned on team api calls
  abbreviation?: string;
  shortName?: string;
  active?: boolean;
}
