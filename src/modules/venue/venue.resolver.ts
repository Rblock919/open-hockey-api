import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Venue } from './dto/venue.dto';
import { NHLVenue } from './interfaces/venue.interface';
import { VenueService } from './venue.service';
import { DataSources } from '../../decorators/datasources.decorator';
import { HockeyDataSources } from '../../data-sources/datasources.interface';

@Resolver(of => Venue)
export class VenueResolver {
  constructor(private venueService: VenueService) {}

  @Query(returns => [Venue], { name: 'venues' })
  async getAllVenues(
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLVenue[]> {
    return this.venueService.getAllVenues(dataSources);
  }

  @Query(returns => Venue, { name: 'venue' })
  async getVenueById(
    @Args('id', { type: () => ID }) id: string,
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLVenue> {
    return this.venueService.getVenueById(id, dataSources);
  }
}
