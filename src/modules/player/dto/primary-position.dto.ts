import { ObjectType, Field } from '@nestjs/graphql';

import { NHLPrimaryPosition } from '../interfaces/primary-position.interface';

@ObjectType()
export class PrimaryPosition implements NHLPrimaryPosition {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  abbreviation: string;
}
