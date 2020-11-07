import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Season } from './dto/season.dto';
import { NHLSeason } from './interfaces/season.interface';
import { SeasonService } from './season.service';

@Resolver(() => Season)
export class SeasonResolver {
  constructor(private seasonService: SeasonService) {}

  @Query(() => [Season], { name: 'seasons' })
  async getAllSeasons(): Promise<NHLSeason[]> {
    return this.seasonService.getAllSeasons();
  }

  @Query(() => Season, { name: 'season' })
  async getSeasonById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<NHLSeason> {
    return this.seasonService.getSeasonById(id);
  }

  @Query(() => Season, { name: 'currentSeason' })
  async getCurrentSeason(): Promise<NHLSeason> {
    return this.seasonService.getCurrentSeason();
  }
}
