import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlayerInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  position: string;

  @Field()
  shoots: string;
}
