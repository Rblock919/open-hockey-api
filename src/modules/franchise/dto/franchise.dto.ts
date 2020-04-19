import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { NHLFranchise } from '../interfaces/franchise.interface';

@ObjectType()
export class Franchise implements NHLFranchise {
  @Field(type => ID)
  readonly franchiseId: number;

  @Field()
  readonly teamName: string;

  @Field()
  readonly link: string;

  @Field(type => Int, { nullable: true })
  firstSeasonId?: number;

  @Field(type => Int, { nullable: true })
  mostRecentTeamId?: number;

  @Field({ nullable: true })
  locationName?: string;

  @Field(type => Int, { nullable: true })
  lastSeasonId?: number;
}
