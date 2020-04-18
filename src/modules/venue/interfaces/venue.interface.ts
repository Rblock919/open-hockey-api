import { NHLTimeZone } from '../../team/interfaces/timezone.interface';

export interface NHLVenue {
  // looks like some venues dont have a value for this field
  id?: string;

  name: string;
  link: string;

  // the following two fields aren't returned on venue specific api calls
  city?: string;
  timeZone?: NHLTimeZone;

  // not returned in list of teams
  appEnabled?: boolean;
}
