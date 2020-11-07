import { Injectable } from '@nestjs/common';

import { NHLTeam } from '../team/interfaces/team.interface';
import { NHLPlayer } from './interfaces/player.interfaces';
import { NHLPlayerPosition } from './interfaces/player-position.interface';
import { DataSourcesService } from '../shared/dataSources.service';

@Injectable()
export class PlayerService {
  constructor(private dataSources: DataSourcesService) {}

  async getPlayerById(id: string): Promise<NHLPlayer> {
    return this.dataSources.nhlStatsAPI.getPlayerById(id);
  }

  async getPlayerPositions(): Promise<NHLPlayerPosition[]> {
    return this.dataSources.nhlStatsAPI.getPlayerPositions();
  }

  async getCurrentTeam(teamId: string): Promise<NHLTeam> {
    return this.dataSources.nhlStatsAPI.getTeamById(teamId);
  }
}
