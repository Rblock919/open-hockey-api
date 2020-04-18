import { RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server-errors';

export class NHLStatsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://statsapi.web.nhl.com/api/v1/';
  }

  async errorFromResponse(response): Promise<ApolloError> {
    const message = `${response.status}: ${response.statusText}`;
    const error = new ApolloError(message, response.status);
    error.extensions = {
      ...error.extensions,
      response: {
        url: response.url,
        status: response.status,
        statusText: response.statusText,
      },
    };
    return error;
  }

  async getAllTeams() {
    return this.get('teams');
  }
}
