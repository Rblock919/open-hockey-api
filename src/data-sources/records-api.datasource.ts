import { Response } from 'apollo-server-env';
import { ApolloError } from 'apollo-server-errors';
import { RESTDataSource } from 'apollo-datasource-rest';

import { ONE_HOUR } from 'src/config/ttl.interface';
import { RecordsAPIRequestTopics } from './datasources.interface';

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

  /**
   * Unfortunately RESTDataSource doesn't expose a great way to invalidate
   * cache coming from an external API. For example one request may need to
   * invalidate other and as of 11/21/20 there is not a good way
   *
   * References:
   * https://github.com/apollographql/apollo-server/issues/1562
   * https://stackoverflow.com/questions/61073879/how-to-invalidate-cache-in-apollo-server-restdatasource
   *
   * @example this.deleteCacheForRequest(RecordsAPIRequestTopics.ATTENDANCE);
   */
  deleteCacheForRequest(topic: RecordsAPIRequestTopics, id?: string) {
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

  // TODO: create interfaces around returned type
  async getAttendance(): Promise<any> {
    return this.get('attendance', undefined, {
      cacheOptions: { ttl: ONE_HOUR },
    });
  }
}
