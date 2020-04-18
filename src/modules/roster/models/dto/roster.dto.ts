import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Roster {
  @Field(type => ID)
  readonly id?: string;

  @Field()
  readonly name: string;
}
