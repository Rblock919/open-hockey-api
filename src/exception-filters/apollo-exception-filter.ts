import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-errors';

@Catch(ApolloError)
export class ApolloExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('in apollo filter');
    // const gqlHost = GqlArgumentsHost.create(host);
    // console.log({ context: gqlHost.getContext() });
    // console.log({ info: gqlHost.getInfo() });

    console.log(
      'Apollo Exception caught! Replace this line with loggly error push...'
    );

    return exception;
  }
}
