import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Conference } from './dto/conference.dto';
import { ConferenceService } from './conference.service';
import { NHLConference } from './interfaces/conference.interface';

@Resolver(() => Conference)
export class ConferenceResolver {
  constructor(private conferenceService: ConferenceService) {}

  @Query(() => [Conference], { name: 'conferences' })
  async getAllConferences(): Promise<NHLConference[]> {
    return this.conferenceService.getAllConferences();
  }

  @Query(() => Conference, { name: 'conference' })
  async getConferenceById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<NHLConference> {
    return this.conferenceService.getConferenceById(id);
  }
}
