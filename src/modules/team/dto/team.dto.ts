import { ObjectType, Field, ID } from '@nestjs/graphql';

import { NHLTeam } from '../interfaces/team.interface';
import { NHLDivision } from '../../division/interfaces/division.interface';
import { NHLVenue } from '../../venue/interfaces/venue.interface';
import { NHLConference } from '../../conference/interfaces/conference.interface';
import { NHLFranchise } from '../../franchise/interfaces/franchise.interface';

@ObjectType()
export class Team implements NHLTeam {
  @Field(type => ID)
  readonly id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly link: string;

  @Field()
  readonly venue: NHLVenue;

  @Field()
  readonly abbreviation: string;

  @Field()
  readonly teamName: string;

  @Field()
  readonly locationName: string;

  @Field()
  readonly firstYearOfPlay: string;

  @Field()
  readonly division: NHLDivision;

  @Field()
  readonly conference: NHLConference;

  @Field()
  readonly franchise: NHLFranchise;

  @Field()
  readonly shortName: string;

  @Field()
  readonly officialSiteUrl: string;

  @Field()
  readonly franchiseId: number;

  @Field()
  readonly active: boolean;
}
