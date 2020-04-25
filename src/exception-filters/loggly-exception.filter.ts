import { Catch, ArgumentsHost } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-errors';
import * as Sentry from '@sentry/minimal';

import { LogglyException } from '../modules/logger/exceptions/loggly.exception';

@Catch(LogglyException)
export class LogglyExceptionFilter implements GqlExceptionFilter {
  constructor(private configService: ConfigService) {}

  private prod = this.configService.get<string>('NODE_ENV') === 'production';

  catch(exception: LogglyException, host: ArgumentsHost) {
    console.log('in loggly gql filter');
    // const gqlHost = GqlArgumentsHost.create(host);

    console.log(
      'Loggly Exception caught! Replace this line with loggly error push...'
    );

    if (this.prod === true) {
      Sentry.captureException(exception);
    }

    // Since LogglyExceptions are of type HttpException we know the structure of the response object
    const response = exception.getResponse() as {
      statusCode: number;
      message: string;
      error: string;
    };

    return new ApolloError(
      `${response.message}: ${response.error}`,
      exception.getStatus().toString()
    );
  }
}
