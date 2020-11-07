import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Franchise } from './dto/franchise.dto';
import { FranchiseService } from './franchise.service';
import { NHLFranchise } from './interfaces/franchise.interface';

@Resolver(() => Franchise)
export class FranchiseResolver {
  constructor(private franchiseService: FranchiseService) {}

  @Query(() => [Franchise], { name: 'franchises' })
  async getAllFranchises(): Promise<NHLFranchise[]> {
    return this.franchiseService.getAllFranchises();
  }

  @Query(() => Franchise, { name: 'franchise' })
  async getFranchiseById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<NHLFranchise> {
    return this.franchiseService.getFranchiseById(id);
  }
}
