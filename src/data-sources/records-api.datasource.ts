import { Response } from 'apollo-server-env';
import { ApolloError } from 'apollo-server-errors';
import { RESTDataSource } from 'apollo-datasource-rest';

export class NHLRecordsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://records.nhl.com/site/api/';
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

  // TODO: create interfaces around returned type
  async getAttendance(): Promise<any> {
    return this.get('attendance', undefined, { cacheOptions: { ttl: 60 } });
  }
}
