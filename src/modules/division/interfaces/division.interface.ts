import { NHLConference } from '../../conference/interfaces/conference.interface';

export interface NHLDivision {
  id: number;
  name: string;
  nameShort: string;
  link: string;
  abbreviation: string;

  // the following two fields are returned on requests for division(s)
  conference?: NHLConference;
  active?: boolean;
}
