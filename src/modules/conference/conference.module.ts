import { Module } from '@nestjs/common';

import { ConferenceService } from './conference.service';
import { ConferenceResolver } from './conference.resolver';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [ConferenceService, ConferenceResolver],
})
export class ConferenceModule {}
