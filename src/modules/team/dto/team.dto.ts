import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Team {
  @Field(type => ID)
  readonly id?: string;

  @Field()
  readonly name: string;

  @Field()
  readonly abbr: string;
}
