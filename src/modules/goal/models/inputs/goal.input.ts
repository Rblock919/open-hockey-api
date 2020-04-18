import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateGoalInput {
  @Field()
  name: string;
}
