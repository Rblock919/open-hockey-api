import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRosterInput {
  @Field()
  name: string;
}
