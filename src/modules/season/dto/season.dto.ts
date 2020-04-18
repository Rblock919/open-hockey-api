import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { NHLSeason } from '../interfaces/season.interface';

@ObjectType()
export class Season implements NHLSeason {
  @Field(type => ID)
  readonly seasonId: string;

  @Field()
  regularSeasonStartDate: string;

  @Field()
  regularSeasonEndDate: string;

  @Field()
  seasonEndDate: string;

  @Field(type => Int)
  numberOfGames: number;

  @Field(type => Boolean)
  tiesInUse: boolean;

  @Field(type => Boolean)
  olympicsParticipation: boolean;

  @Field(type => Boolean)
  conferencesInUse: boolean;

  @Field(type => Boolean)
  divisionsInUse: boolean;

  @Field(type => Boolean)
  wildCardInUse: boolean;
}
