import { Catch, ArgumentsHost } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-errors';

import { LogglyException } from '../exceptions/loggly.exception';

@Catch(LogglyException)
export class LogglyExceptionFilter implements GqlExceptionFilter {
  catch(exception: LogglyException, host: ArgumentsHost) {
    console.log('in loggly gql filter');
    // const gqlHost = GqlArgumentsHost.create(host);

    console.log(
      'Loggly Exception caught! Replace this line with sentry error push...'
    );

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
