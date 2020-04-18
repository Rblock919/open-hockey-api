import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Division } from './dto/division.dto';
import { DivisionService } from './division.service';
import { DataSources } from '../../decorators/datasources.decorator';
import { HockeyDataSources } from '../../data-sources/datasources.interface';
import { NHLDivision } from './interfaces/division.interface';

@Resolver(of => Division)
export class DivisionResolver {
  constructor(private readonly divisionService: DivisionService) {}

  @Query(returns => [Division], { name: 'divisions' })
  async getAllDivisions(
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLDivision[]> {
    return this.divisionService.getAllDivisions(dataSources);
  }

  @Query(returns => Division, { name: 'division' })
  async getDivisionById(
    @Args('id', { type: () => ID }) id: string,
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLDivision> {
    return this.divisionService.getDivisionById(id, dataSources);
  }
}
