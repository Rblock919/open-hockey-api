import { ObjectType, Field, ID } from '@nestjs/graphql';

import { NHLTeam } from '../interfaces/team.interface';
import { Venue } from '../../venue/dto/venue.dto';
import { Player } from '../../player/dto/player.dto';
import { Division } from '../../division/dto/division.dto';
import { Franchise } from '../../franchise/dto/franchise.dto';
import { Conference } from '../../conference/dto/conference.dto';
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

  @Field()
  readonly abbreviation: string;

  @Field()
  readonly teamName: string;

  @Field()
  readonly locationName: string;

  @Field()
  readonly firstYearOfPlay: string;

  // TODO: stitch field so that conference & active fields can be included
  @Field(type => Division)
  readonly division: Division;

  // TODO: stitch field so that abbreviation, shortName & active fields can be included
  @Field(type => Conference)
  readonly conference: Conference;

  // TODO: stitch field so that appEnabled can be included as well???
  @Field(type => Venue)
  readonly venue: Venue;

  // TODO: stitch field so that firstSeasonId, mostRecentTeamId and locationName can be returned
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

  /* Stitched Fields */
  @Field(type => [Player])
  readonly roster: Player[];

  /* End of Stitched Fields */
}
