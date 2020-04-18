import { ObjectType, Field, ID } from '@nestjs/graphql';

import { NHLDivision } from '../interfaces/division.interface';
import { Conference } from '../../conference/dto/conference.dto';

@ObjectType()
export class Division implements NHLDivision {
  @Field(type => ID)
  readonly id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly nameShort: string;

  @Field()
  readonly link: string;

  @Field()
  readonly abbreviation: string;

  @Field(type => Conference, { nullable: true })
  readonly conference?: Conference;

  @Field(type => Boolean, { nullable: true })
  readonly active?: boolean;
}
