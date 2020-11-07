import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueResolver } from './venue.resolver';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [VenueService, VenueResolver],
})
export class VenueModule {}
