import { Injectable } from '@nestjs/common';

import { NHLTeam } from '../team/interfaces/team.interface';
import { NHLPlayer } from './interfaces/player.interfaces';
import { NHLPlayerPosition } from './interfaces/player-position.interface';
import { HockeyDataSources } from '../../data-sources/datasources.interface';

@Injectable()
export class PlayerService {
  async getPlayerById(
    id: string,
    dataSources: HockeyDataSources
  ): Promise<NHLPlayer> {
    return dataSources.nhlStatsAPI.getPlayerById(id);
  }

  async getPlayerPositions(
    dataSources: HockeyDataSources
  ): Promise<NHLPlayerPosition[]> {
    return dataSources.nhlStatsAPI.getPlayerPositions();
  }

  async getCurrentTeam(
    teamId: string,
    dataSources: HockeyDataSources
  ): Promise<NHLTeam> {
    return dataSources.nhlStatsAPI.getTeamById(teamId);
  }
}
