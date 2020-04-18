import { NHLTimeZone } from '../../team/interfaces/team.interface';

export interface NHLVenue {
  // looks like this doesn't exist for some venues?
  id?: string;

  name: string;
  link: string;

  // the following two fields aren't returned on venue specific api calls
  city?: string;
  timeZone?: NHLTimeZone;

  // not returned in list of teams
  appEnabled?: boolean;
}
