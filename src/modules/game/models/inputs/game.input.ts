import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateGameInput {
  @Field()
  name: string;
}
