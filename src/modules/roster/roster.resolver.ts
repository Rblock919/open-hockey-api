import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Roster } from './models/dto/roster.dto';
import { RosterService } from './roster.service';

@Resolver(of => Roster)
export class RosterResolver {
  constructor(private rosterService: RosterService) {}

  @Query(returns => [Roster], { name: 'rosters' })
  async getAllRosters(): Promise<any[]> {
    return this.rosterService.getAllRosters();
  }

  @Query(returns => Roster, { name: 'roster' })
  async getRosterById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<any> {
    return this.rosterService.getRosterById(id);
  }
}
