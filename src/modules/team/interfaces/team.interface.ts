import { NHLDivision } from '../../division/interfaces/division.interface';
import { NHLVenue } from '../../venue/interfaces/venue.interface';
import { NHLConference } from '../../conference/interfaces/conference.interface';
import { NHLFranchise } from '../../franchise/interfaces/franchise.interface';

export interface NHLTeam {
  id: number;
  name: string;
  link: string;
  venue: NHLVenue;
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  division: NHLDivision;
  conference: NHLConference;
  franchise: NHLFranchise;
  shortName: string;
  officialSiteUrl: string;
  franchiseId: number;
  active: boolean;
}
