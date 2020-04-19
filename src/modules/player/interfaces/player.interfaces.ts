export interface NHLPlayer {
  id: number;
  fullName: string;
  link: string;
  firstName: string;
  lastName: string;
  primaryNumber: string;
  birthDate: string;
  currentAge: number;
  birthCity: string;
  birthCountry: string;
  nationality: string;
  height: string;
  weight: number;
  active: boolean;
  alternateCaptain: boolean;
  captain: boolean;
  rookie: boolean;
  shootsCatches: string;
  rosterStatus: string;
  currentTeam: NHLCurrentTeam;
  primaryPosition: NHLPrimaryPosition;
}

export interface NHLCurrentTeam {
  id: number;
  name: string;
  link: string;
}

export interface NHLPrimaryPosition {
  code: string;
  name: string;
  type: string;
  abbreviation: string;
}
