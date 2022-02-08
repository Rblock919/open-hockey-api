import { Response } from 'apollo-server-env';
import { ApolloError } from 'apollo-server-errors';
import { RESTDataSource } from 'apollo-datasource-rest';

import { ONE_HOUR, ONE_MINUTE } from 'src/config/ttl.interface';
import { NHLTeam } from 'src/modules/team/interfaces/team.interface';
import { NHLVenue } from 'src/modules/venue/interfaces/venue.interface';
import { NHLPlayer } from 'src/modules/player/interfaces/player.interfaces';
import { NHLSeason } from 'src/modules/season/interfaces/season.interface';
import { NHLDivision } from 'src/modules/division/interfaces/division.interface';
import { NHLFranchise } from 'src/modules/franchise/interfaces/franchise.interface';
import { NHLConference } from 'src/modules/conference/interfaces/conference.interface';
import { NHLRosterPlayer } from 'src/modules/player/interfaces/roster-player.interface';
import { NHLPlayerPosition } from 'src/modules/player/interfaces/player-position.interface';
import { NHLSchedule } from 'src/modules/schedule/interfaces/schedule.interface';
import { StatsAPIRequestTopics } from './datasources.interface';

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

  /**
   * Unfortunately RESTDataSource doesn't expose a great way to invalidate
   * cache coming from an external API. For example one request may need to
   * invalidate other and as of 11/21/20 there is not a good way
   *
   * References:
   * https://github.com/apollographql/apollo-server/issues/1562
   * https://stackoverflow.com/questions/61073879/how-to-invalidate-cache-in-apollo-server-restdatasource
   *
   * @example this.deleteCacheForRequest(StatsAPIRequestTopics.TEAMS);
   * @example this.deleteCacheForRequest(StatsAPIRequestTopics.TEAMS, '12');
   */
  deleteCacheForRequest(topic: StatsAPIRequestTopics, id?: string) {
    const requestUrl = id
      ? `${this.baseURL}${topic}/${id}`
      : `${this.baseURL}${topic}`;

    this.memoizedResults.delete(requestUrl);
    // eslint-disable-next-line
    // @ts-ignore
    this.httpCache.keyValueCache.delete(requestUrl);

    // to reset all:
    // this.httpCache.keyValueCache.store.reset();
  }

  // TODO: find better way to map response back
  // ^^^>>> maybe method that takes the data and a string for type and throws apollo error if that type doesn't exist and just returns the relevant data

  // TODO: cast the get method responses for these calls?

  // TODO: update id params to be numbers so that calling methods dont have to use string template since it's already being used here
  // OR
  // Update interface to be string instead of number for id since gql passes it in as a string for ID anyways

  async getAllTeams(): Promise<NHLTeam[]> {
    const data = await this.get('teams', undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.teams;
  }

  async getTeamById(id: string): Promise<NHLTeam> {
    const data = await this.get(`teams/${id}`, undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.teams[0];
  }

  // For some reason getting roster for teamid 11 is broke right now
  async getTeamRoster(teamId: string): Promise<NHLRosterPlayer[]> {
    const data = await this.get(`teams/${teamId}/roster`, undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.roster;
  }

  async getAllDivisions(): Promise<NHLDivision[]> {
    const data = await this.get('divisions', undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.divisions;
  }

  async getDivisionById(id: string): Promise<NHLDivision> {
    const data = await this.get(`divisions/${id}`, undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.divisions[0];
  }

  async getAllVenues(): Promise<NHLVenue[]> {
    const data = await this.get('venues', undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.venues;
  }

  async getVenueById(id: string): Promise<NHLVenue> {
    const data = await this.get(`venues/${id}`, undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.venues[0];
  }

  async getAllConferences(): Promise<NHLConference[]> {
    const data = await this.get('conferences', undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.conferences;
  }

  async getConferenceById(id: string): Promise<NHLConference> {
    const data = await this.get(`conferences/${id}`, undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.conferences[0];
  }

  async getAllSeasons(): Promise<NHLSeason[]> {
    const data = await this.get('seasons', undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.seasons;
  }

  async getSeasonById(id: string): Promise<NHLSeason> {
    const data = await this.get(`seasons/${id}`, undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.seasons[0];
  }

  async getCurrentSeason(): Promise<NHLSeason> {
    const data = await this.get('seasons/current', undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.seasons[0];
  }

  async getPlayerById(id: string): Promise<NHLPlayer> {
    const data = await this.get(`people/${id}`, undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.people[0];
  }

  async getPlayerPositions(): Promise<NHLPlayerPosition[]> {
    const data =
      (await this.get<NHLPlayerPosition[]>('positions', undefined, {
        cacheOptions: { ttl: ONE_HOUR },
      })) || [];
    // pull out the N/A Unkown entry unless I find a use for it
    return data.filter(x => x.abbrev !== 'N/A');
  }

  async getAllFranchises(): Promise<NHLFranchise[]> {
    const data = await this.get('franchises', undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.franchises;
  }

  async getFranchiseById(id: string): Promise<NHLFranchise> {
    const data = await this.get(`franchises/${id}`, undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
    return data.franchises[0];
  }

  async getSchedule(): Promise<NHLSchedule> {
    const data = await this.get(`schedule`, undefined, {
      cacheOptions: { ttl: ONE_MINUTE }, // TODO: figure out better caching strategy due to score
    });
    return { dates: data.dates };
  }
}
