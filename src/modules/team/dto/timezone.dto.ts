import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { NHLTimeZone } from '../interfaces/timezone.interface';

@ObjectType()
export class TimeZone implements NHLTimeZone {
  @Field(type => ID)
  id: string;

  // TODO: check if this value being negative causes issues
  @Field(type => Int)
  offset: number;

  @Field()
  tz: string;
}
