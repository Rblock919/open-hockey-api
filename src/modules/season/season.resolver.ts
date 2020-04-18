import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Season } from './models/dto/season.dto';
import { SeasonService } from './season.service';

@Resolver(of => Season)
export class SeasonResolver {
  constructor(private seasonService: SeasonService) {}

  @Query(returns => [Season], { name: 'seasons' })
  async getAllSeasons(): Promise<any[]> {
    return this.seasonService.getAllSeasons();
  }

  @Query(returns => Season, { name: 'season' })
  async getSeasonById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<any> {
    return this.seasonService.getSeasonById(id);
  }
}
