import { Injectable } from '@nestjs/common';

import { NHLTeam } from './interfaces/team.interface';
import { HockeyDataSources } from '../../data-sources/datasources.interface';

@Injectable()
export class TeamService {
  async getAllTeams(dataSources: HockeyDataSources): Promise<NHLTeam[]> {
    return dataSources.nhlStatsAPI.getAllTeams();
  }

  async getTeamById(id: string, dataSources: HockeyDataSources): Promise<any> {
    return dataSources.nhlStatsAPI.getTeamById(id);
  }
}
