import { NHLConference } from '../../conference/interfaces/conference.interface';

export interface NHLDivision {
  id: number;
  name: string;
  nameShort: string;
  link: string;
  abbreviation: string;
  // returned on request for division(s)
  conference?: NHLConference;
  // returned on request for division(s)
  active?: boolean;
}
