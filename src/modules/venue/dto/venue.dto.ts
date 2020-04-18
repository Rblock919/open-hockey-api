import { ObjectType, Field, ID } from '@nestjs/graphql';

import { NHLVenue } from '../interfaces/venue.interface';
import { TimeZone } from '../../team/dto/timezone.dto';

@ObjectType()
export class Venue implements NHLVenue {
  @Field(type => ID, { nullable: true })
  readonly id?: string;

  @Field()
  readonly name: string;

  @Field()
  readonly link: string;

  // TODO: make into a stitched gql field so that on venue specific calls this field is populated
  @Field({ nullable: true })
  readonly city?: string;

  // TODO: make into a stitched gql field so that on venue specific calls this field is populated
  @Field(type => TimeZone, { nullable: true })
  readonly timeZone?: TimeZone;

  // TODO: make into a stitched gql field so that on team specific calls this field is populated
  @Field(type => Boolean, { nullable: true })
  readonly appEnabled?: boolean;
}
