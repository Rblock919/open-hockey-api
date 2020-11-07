import { Injectable } from '@nestjs/common';

import { NHLTeam } from './interfaces/team.interface';
import { NHLPlayer } from '../player/interfaces/player.interfaces';
import { PlayerService } from '../player/player.service';
import { HockeyDataSources } from '../../data-sources/datasources.interface';
import { DataSourcesService } from '../shared/dataSources.service';

@Injectable()
export class TeamService {
  constructor(
    private playerService: PlayerService,
    private dataSources: DataSourcesService
  ) {}

  async getAllTeams(): Promise<NHLTeam[]> {
    return this.dataSources.nhlStatsAPI.getAllTeams();
  }

  async getTeamById(id: string): Promise<NHLTeam> {
    return this.dataSources.nhlStatsAPI.getTeamById(id);
  }

  async getTeamRoster(teamId: string): Promise<NHLPlayer[]> {
    const rosterPlayersIds = (
      await this.dataSources.nhlStatsAPI.getTeamRoster(teamId)
    ).map(x => x.person.id);
    const returnPlayers = [] as NHLPlayer[];
    await Promise.all(
      rosterPlayersIds.map(async id => {
        const player = await this.playerService.getPlayerById(id.toString());
        returnPlayers.push(player);
      })
    );
    return returnPlayers;
  }
}
