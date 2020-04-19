import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Player {
  @Field(type => ID)
  readonly id?: string;

  @Field()
  readonly firstName: string;

  @Field()
  readonly lastName: string;

  @Field()
  readonly position: string;

  @Field()
  readonly shoots: string;
}
