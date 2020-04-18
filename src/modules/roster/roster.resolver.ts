import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';

import { Roster } from './models/dto/roster.dto';
import { RosterService } from './roster.service';
import { RosterEntity } from './models/entities/roster.entity';
import { CreateRosterInput } from './models/inputs/roster.input';

@Resolver(of => Roster)
export class RosterResolver {
  constructor(private rosterService: RosterService) {}

  @Query(returns => [Roster], { name: 'rosters' })
  async getAllRosters(): Promise<RosterEntity[]> {
    return this.rosterService.getAllRosters();
  }

  @Query(returns => Roster, { name: 'roster' })
  async getRosterById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<RosterEntity> {
    return this.rosterService.getRosterById(id);
  }

  @Mutation(returns => Roster, { name: 'createRoster' })
  async submitRoster(
    @Args('data') data: CreateRosterInput
  ): Promise<RosterEntity> {
    return this.rosterService.createRoster(data);
  }
}
