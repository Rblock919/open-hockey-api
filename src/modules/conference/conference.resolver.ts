import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Conference } from './dto/conference.dto';
import { ConferenceService } from './conference.service';
import { DataSources } from '../../decorators/datasources.decorator';
import { HockeyDataSources } from '../../data-sources/datasources.interface';
import { NHLConference } from './interfaces/conference.interface';

@Resolver(of => Conference)
export class ConferenceResolver {
  constructor(private conferenceService: ConferenceService) {}

  @Query(returns => [Conference], { name: 'conferences' })
  async getAllConferences(
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLConference[]> {
    return this.conferenceService.getAllConferences(dataSources);
  }

  @Query(returns => Conference, { name: 'conference' })
  async getConferenceById(
    @Args('id', { type: () => ID }) id: string,
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLConference> {
    return this.conferenceService.getConferenceById(id, dataSources);
  }
}
