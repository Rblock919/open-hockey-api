import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';

import { Season } from './models/dto/season.dto';
import { SeasonService } from './season.service';
import { SeasonEntity } from './models/entities/season.entity';
import { CreateSeasonInput } from './models/inputs/season.input';

@Resolver(of => Season)
export class SeasonResolver {
  constructor(private seasonService: SeasonService) {}

  @Query(returns => [Season], { name: 'seasons' })
  async getAllSeasons(): Promise<SeasonEntity[]> {
    return this.seasonService.getAllSeasons();
  }

  @Query(returns => Season, { name: 'season' })
  async getSeasonById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<SeasonEntity> {
    return this.seasonService.getSeasonById(id);
  }

  @Mutation(returns => Season, { name: 'createSeason' })
  async submitSeason(
    @Args('data') data: CreateSeasonInput
  ): Promise<SeasonEntity> {
    return this.seasonService.createSeason(data);
  }
}
