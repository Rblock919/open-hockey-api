import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Franchise } from './dto/franchise.dto';
import { FranchiseService } from './franchise.service';
import { DataSources } from '../../decorators/datasources.decorator';
import { NHLFranchise } from './interfaces/franchise.interface';
import { HockeyDataSources } from '../../data-sources/datasources.interface';

@Resolver(() => Franchise)
export class FranchiseResolver {
  constructor(private franchiseService: FranchiseService) {}

  @Query(() => [Franchise], { name: 'franchises' })
  async getAllFranchises(
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLFranchise[]> {
    return this.franchiseService.getAllFranchises(dataSources);
  }

  @Query(() => Franchise, { name: 'franchise' })
  async getFranchiseById(
    @Args('id', { type: () => ID }) id: string,
    @DataSources() dataSources: HockeyDataSources
  ): Promise<NHLFranchise> {
    return this.franchiseService.getFranchiseById(id, dataSources);
  }
}
