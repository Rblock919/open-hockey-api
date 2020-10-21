import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Season } from './dto/season.dto';
import { NHLSeason } from './interfaces/season.interface';
import { SeasonService } from './season.service';
import { DataSources } from '../../decorators/datasources.decorator';
import { HockeyDataSources } from '../../data-sources/datasources.interface';

@Resolver(() => Season)
export class SeasonResolver {
  constructor(private seasonService: SeasonService) {}

  @Query(() => [Season], { name: 'seasons' })
  async getAllSeasons(
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLSeason[]> {
    return this.seasonService.getAllSeasons(dataSources);
  }

  @Query(() => Season, { name: 'season' })
  async getSeasonById(
    @Args('id', { type: () => ID }) id: string,
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLSeason> {
    return this.seasonService.getSeasonById(id, dataSources);
  }

  @Query(() => Season, { name: 'currentSeason' })
  async getCurrentSeason(
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLSeason> {
    return this.seasonService.getCurrentSeason(dataSources);
  }
}
