import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { Team } from '../../team/dto/team.dto';
import { NHLPlayer } from '../interfaces/player.interfaces';
import { PrimaryPosition } from './primary-position.dto';

@ObjectType()
export class Player implements NHLPlayer {
  @Field(type => ID)
  id: number;

  @Field()
  fullName: string;

  @Field()
  link: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  primaryNumber: string;

  @Field()
  birthDate: string;

  @Field(type => Int)
  currentAge: number;

  @Field()
  birthCity: string;

  @Field()
  birthCountry: string;

  @Field()
  nationality: string;

  @Field()
  height: string;

  @Field(type => Int)
  weight: number;

  @Field(type => Boolean)
  active: boolean;

  @Field(type => Boolean)
  alternateCaptain: boolean;

  @Field(type => Boolean)
  captain: boolean;

  @Field(type => Boolean)
  rookie: boolean;

  @Field()
  shootsCatches: string;

  @Field()
  rosterStatus: string;

  @Field(type => PrimaryPosition)
  primaryPosition: PrimaryPosition;

  /* Stitched Fields */
  @Field(type => Team)
  currentTeam: Team;
  /* End of Stitched Fields */
}
