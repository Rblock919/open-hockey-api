import { Response } from 'apollo-server-env';
import { ApolloError } from 'apollo-server-errors';
import { RESTDataSource } from 'apollo-datasource-rest';

import { HOUR } from 'src/config/ttl.interface';
import { NHLTeam } from 'src/modules/team/interfaces/team.interface';
import { NHLVenue } from 'src/modules/venue/interfaces/venue.interface';
import { NHLPlayer } from 'src/modules/player/interfaces/player.interfaces';
import { NHLSeason } from 'src/modules/season/interfaces/season.interface';
import { NHLDivision } from 'src/modules/division/interfaces/division.interface';
import { NHLFranchise } from 'src/modules/franchise/interfaces/franchise.interface';
import { NHLConference } from 'src/modules/conference/interfaces/conference.interface';
import { NHLRosterPlayer } from 'src/modules/player/interfaces/roster-player.interface';
import { NHLPlayerPosition } from 'src/modules/player/interfaces/player-position.interface';

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
  // TODO: update id params to be numbers so that calling methods dont have to use string template since it's already being used here

  async getAllTeams(): Promise<NHLTeam[]> {
    const data = await this.get('teams', undefined, {
      cacheOptions: { ttl: HOUR },
    });
    return data.teams;
  }

  async getTeamById(id: string): Promise<NHLTeam> {
    const data = await this.get(`teams/${id}`, undefined, {
      cacheOptions: { ttl: HOUR },
    });
    return data.teams[0];
  }

  async getTeamRoster(teamId: string): Promise<NHLRosterPlayer[]> {
    const data = await this.get(`teams/${teamId}/roster`, undefined, {
      cacheOptions: { ttl: HOUR },
    });
    return data.roster;
  }

  async getAllDivisions(): Promise<NHLDivision[]> {
    const data = await this.get('divisions');
    return data.divisions;
  }

  async getDivisionById(id: string): Promise<NHLDivision> {
    const data = await this.get(`divisions/${id}`);
    return data.divisions[0];
  }

  async getAllVenues(): Promise<NHLVenue[]> {
    const data = await this.get('venues');
    return data.venues;
  }

  async getVenueById(id: string): Promise<NHLVenue> {
    const data = await this.get(`venues/${id}`);
    return data.venues[0];
  }

  async getAllConferences(): Promise<NHLConference[]> {
    const data = await this.get('conferences');
    return data.conferences;
  }

  async getConferenceById(id: string): Promise<NHLConference> {
    const data = await this.get(`conferences/${id}`);
    return data.conferences[0];
  }

  async getAllSeasons(): Promise<NHLSeason[]> {
    const data = await this.get('seasons');
    return data.seasons;
  }

  async getSeasonById(id: string): Promise<NHLSeason> {
    const data = await this.get(`seasons/${id}`);
    return data.seasons[0];
  }

  async getCurrentSeason(): Promise<NHLSeason> {
    const data = await this.get('seasons/current');
    return data.seasons[0];
  }

  async getPlayerById(id: string): Promise<NHLPlayer> {
    const data = await this.get(`people/${id}`, undefined, {
      cacheOptions: { ttl: HOUR },
    });
    return data.people[0];
  }

  async getPlayerPositions(): Promise<NHLPlayerPosition[]> {
    const data = (await this.get<NHLPlayerPosition[]>('positions')) || [];
    // pull out the N/A Unkown entry unless I find a use for it
    return data.filter(x => x.abbrev !== 'N/A');
  }

  async getAllFranchises(): Promise<NHLFranchise[]> {
    const data = await this.get('franchises');
    return data.franchises;
  }

  async getFranchiseById(id: string): Promise<NHLFranchise> {
    const data = await this.get(`franchises/${id}`);
    return data.franchises[0];
  }
}
