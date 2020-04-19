import { Injectable } from '@nestjs/common';

import { NHLTeam } from './interfaces/team.interface';
import { NHLPlayer } from '../player/interfaces/player.interfaces';
import { PlayerService } from '../player/player.service';
import { HockeyDataSources } from '../../data-sources/datasources.interface';

@Injectable()
export class TeamService {
  constructor(private playerService: PlayerService) {}

  async getAllTeams(dataSources: HockeyDataSources): Promise<NHLTeam[]> {
    return dataSources.nhlStatsAPI.getAllTeams();
  }

  async getTeamById(
    id: string,
    dataSources: HockeyDataSources
  ): Promise<NHLTeam> {
    return dataSources.nhlStatsAPI.getTeamById(id);
  }

  async getTeamRoster(
    teamId: string,
    dataSources: HockeyDataSources
  ): Promise<NHLPlayer[]> {
    const rosterPlayersIds = await (
      await dataSources.nhlStatsAPI.getTeamRoster(teamId)
    ).map(x => x.person.id);
    const returnPlayers = [] as NHLPlayer[];
    await Promise.all(
      rosterPlayersIds.map(async id => {
        const player = await this.playerService.getPlayerById(
          id.toString(),
          dataSources
        );
        returnPlayers.push(player);
      })
    );
    return returnPlayers;
  }
}
