import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSeasonInput {
  @Field()
  name: string;
}
