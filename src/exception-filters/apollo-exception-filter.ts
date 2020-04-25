import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-errors';
import * as Sentry from '@sentry/minimal';

@Catch(ApolloError)
export class ApolloExceptionFilter implements GqlExceptionFilter {
  constructor(private configService: ConfigService) {}

  private prod = this.configService.get<string>('NODE_ENV') === 'production';

  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('in apollo filter');
    // const gqlHost = GqlArgumentsHost.create(host);
    // console.log({ context: gqlHost.getContext() });
    // console.log({ info: gqlHost.getInfo() });

    console.log(
      'Apollo Exception caught! Replace this line with loggly error push...'
    );

    if (this.prod === true) {
      Sentry.captureException(exception);
    }

    // TODO: see if it's possible to report to sentry unless it's a 404

    return exception;
  }
}
