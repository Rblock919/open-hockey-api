import { Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-errors';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements GqlExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    console.log('in bad request gql filter');
    // const gqlHost = GqlArgumentsHost.create(host);

    console.log(
      'Bad Request Exception caught! Replace this line with sentry error push...'
    );

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
