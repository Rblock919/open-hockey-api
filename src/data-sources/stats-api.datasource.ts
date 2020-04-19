import { RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server-errors';
import { Response } from 'apollo-server-env';

import { NHLTeam } from '../modules/team/interfaces/team.interface';
import { NHLVenue } from '../modules/venue/interfaces/venue.interface';
import { NHLPlayer } from '../modules/player/interfaces/player.interfaces';
import { NHLSeason } from '../modules/season/interfaces/season.interface';
import { NHLDivision } from '../modules/division/interfaces/division.interface';
import { NHLConference } from '../modules/conference/interfaces/conference.interface';
import { NHLRosterPlayer } from '../modules/player/interfaces/roster-player.interface';
import { NHLPlayerPosition } from '../modules/player/interfaces/player-position.interface';

export class NHLStatsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://statsapi.web.nhl.com/api/v1/';
  }

  protected async errorFromResponse(response: Response): Promise<ApolloError> {
    const message = `${response.status}: ${response.statusText}`;
    const error = new ApolloError(message, `${response.status}`);

    const body = await this.parseBody(response);

    error.extensions = {
      ...error.extensions,
      response: {
        url: response.url,
        status: response.status,
        statusText: response.statusText,
        body,
      },
    };
    return error;
  }

  // TODO: possibly throw apollo error instead of return null;
  // TODO: find better way to map response back
  // ^^^>>> maybe method that takes the data and a string for type and throws apollo error if that type doesn't exist and just returns the relevant data
  // TODO: cast responses from these calls?

  async getAllTeams(): Promise<NHLTeam[]> {
    const data = await this.get('teams');
    return data.teams || null;
  }

  async getTeamById(id: string): Promise<NHLTeam> {
    const data = await this.get(`teams/${id}`);
    return data.teams[0] || null;
  }

  async getTeamRoster(teamId: string): Promise<NHLRosterPlayer[]> {
    const data = await this.get(`teams/${teamId}/roster`);
    return data.roster || null;
  }

  async getAllDivisions(): Promise<NHLDivision[]> {
    const data = await this.get('divisions');
    return data.divisions || null;
  }

  async getDivisionById(id: string): Promise<NHLDivision> {
    const data = await this.get(`divisions/${id}`);
    return data.divisions[0] || null;
  }

  async getAllVenues(): Promise<NHLVenue[]> {
    const data = await this.get('venues');
    return data.venues || null;
  }

  async getVenueById(id: string): Promise<NHLVenue> {
    const data = await this.get(`venues/${id}`);
    return data.venues[0] || null;
  }

  async getAllConferences(): Promise<NHLConference[]> {
    const data = await this.get('conferences');
    return data.conferences || null;
  }

  async getConferenceById(id: string): Promise<NHLConference> {
    const data = await this.get(`conferences/${id}`);
    return data.conferences[0] || null;
  }

  async getAllSeasons(): Promise<NHLSeason[]> {
    const data = await this.get('seasons');
    return data.seasons || null;
  }

  async getSeasonById(id: string): Promise<NHLSeason> {
    const data = await this.get(`seasons/${id}`);
    return data.seasons[0] || null;
  }

  async getCurrentSeason(): Promise<NHLSeason> {
    const data = await this.get('seasons/current');
    return data.seasons[0] || null;
  }

  async getPlayerById(id: string): Promise<NHLPlayer> {
    const data = await this.get(`people/${id}`);
    return data.people[0] || null;
  }

  async getPlayerPositions(): Promise<NHLPlayerPosition[]> {
    const data = await this.get<NHLPlayerPosition[]>('positions');
    // pull out the N/A Unkown entry unless I find a use for it
    return data.filter(x => x.abbrev !== 'N/A');
  }
}
