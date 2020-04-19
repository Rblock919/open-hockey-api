// TODO: get rid of file once gql stitching is complete
import { ObjectType, Field, ID } from '@nestjs/graphql';

import { NHLCurrentTeam } from '../interfaces/current-team.interface';

@ObjectType()
export class CurrentTeam implements NHLCurrentTeam {
  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  link: string;
}
