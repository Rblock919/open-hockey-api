import { ObjectType, Field } from '@nestjs/graphql';

import { NHLPlayerPosition } from '../interfaces/player-position.interface';

@ObjectType()
export class PlayerPosition implements NHLPlayerPosition {
  @Field()
  abbrev: string;

  @Field()
  code: string;

  @Field()
  fullName: string;

  @Field()
  type: string;
}
