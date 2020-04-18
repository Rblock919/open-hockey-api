import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueResolver } from './venue.resolver';

@Module({
  providers: [VenueService, VenueResolver],
})
export class VenueModule {}
