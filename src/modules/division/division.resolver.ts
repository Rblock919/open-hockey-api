import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Division } from './dto/division.dto';
import { DivisionService } from './division.service';
import { NHLDivision } from './interfaces/division.interface';

@Resolver(() => Division)
export class DivisionResolver {
  constructor(private readonly divisionService: DivisionService) {}

  @Query(() => [Division], { name: 'divisions' })
  async getAllDivisions(): Promise<NHLDivision[]> {
    return this.divisionService.getAllDivisions();
  }

  @Query(() => Division, { name: 'division' })
  async getDivisionById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<NHLDivision> {
    return this.divisionService.getDivisionById(id);
  }
}
