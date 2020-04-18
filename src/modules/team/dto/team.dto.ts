import { ObjectType, Field, ID } from '@nestjs/graphql';

import { Venue } from '../../venue/dto/venue.dto';
import { Division } from '../../division/dto/division.dto';
import { Franchise } from '../../franchise/dto/franchise.dto';
import { Conference } from '../../conference/dto/conference.dto';
import { NHLTeam } from '../interfaces/team.interface';
// import { NHLFranchise } from '../../franchise/interfaces/franchise.interface';
// import { NHLConference } from '../../conference/interfaces/conference.interface';
// import { NHLDivision } from '../../division/interfaces/division.interface';
// import { NHLVenue } from '../../venue/interfaces/venue.interface';

@ObjectType()
export class Team implements NHLTeam {
  @Field(type => ID)
  readonly id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly link: string;

  @Field(type => Venue)
  readonly venue: Venue;

  @Field()
  readonly abbreviation: string;

  @Field()
  readonly teamName: string;

  @Field()
  readonly locationName: string;

  @Field()
  readonly firstYearOfPlay: string;

  @Field(type => Division)
  readonly division: Division;

  @Field(type => Conference)
  readonly conference: Conference;

  @Field(type => Franchise)
  readonly franchise: Franchise;

  @Field()
  readonly shortName: string;

  @Field()
  readonly officialSiteUrl: string;

  @Field()
  readonly franchiseId: number;

  @Field()
  readonly active: boolean;
}
