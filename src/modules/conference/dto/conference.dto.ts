import { ObjectType, Field, ID } from '@nestjs/graphql';
import { NHLConference } from '../interfaces/conference.interface';

@ObjectType()
export class Conference implements NHLConference {
  @Field(type => ID)
  readonly id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly link: string;

  @Field({ nullable: true })
  readonly abbreviation?: string;

  @Field({ nullable: true })
  readonly shortName?: string;

  @Field(type => Boolean, { nullable: true })
  readonly active?: boolean;
}
