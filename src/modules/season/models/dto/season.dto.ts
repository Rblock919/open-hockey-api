import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Season {
  @Field(type => ID)
  readonly id?: string;

  @Field()
  readonly name: string;
}
