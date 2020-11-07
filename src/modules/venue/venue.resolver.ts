import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Venue } from './dto/venue.dto';
import { NHLVenue } from './interfaces/venue.interface';
import { VenueService } from './venue.service';

@Resolver(() => Venue)
export class VenueResolver {
  constructor(private venueService: VenueService) {}

  @Query(() => [Venue], { name: 'venues' })
  async getAllVenues(): Promise<NHLVenue[]> {
    return this.venueService.getAllVenues();
  }

  @Query(() => Venue, { name: 'venue' })
  async getVenueById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<NHLVenue> {
    return this.venueService.getVenueById(id);
  }
}
