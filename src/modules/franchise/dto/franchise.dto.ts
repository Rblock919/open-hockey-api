import { ObjectType, Field, ID } from '@nestjs/graphql';

import { NHLFranchise } from '../interfaces/franchise.interface';

@ObjectType()
export class Franchise implements NHLFranchise {
  @Field(type => ID)
  readonly franchiseId: number;

  @Field()
  readonly teamName: string;

  @Field()
  readonly link: string;
}
