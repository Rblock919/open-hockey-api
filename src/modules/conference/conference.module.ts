import { Module } from '@nestjs/common';

import { ConferenceService } from './conference.service';
import { ConferenceResolver } from './conference.resolver';

@Module({
  providers: [ConferenceService, ConferenceResolver],
})
export class ConferenceModule {}
