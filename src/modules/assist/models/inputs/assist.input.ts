import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssistInput {
  @Field()
  name: string;
}
