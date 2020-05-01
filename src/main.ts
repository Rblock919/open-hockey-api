import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';

import { AppModule } from './app.module';
import { LogglyService } from './modules/logger/logger.service';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ApolloExceptionFilter } from './exception-filters/apollo-exception-filter';
import { BadRequestExceptionFilter } from './exception-filters/bad-request-exception.filter';
import { LogglyExceptionFilter } from './exception-filters/loggly-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });

  const configService = app.get(ConfigService);
  const logglyService = new LogglyService(configService);

  app.useLogger(logglyService);

  // TODO: update cors policy
  app.enableCors();

  app.useGlobalFilters(
    new ApolloExceptionFilter(configService),
    new BadRequestExceptionFilter(configService),
    new LogglyExceptionFilter(configService)
  );

  app.useGlobalInterceptors(new LoggingInterceptor(logglyService));

  // TODO: uncomment security headers once tailored for gql dev purposes
  // AppHeaderSecurity(app);

  const dsn = configService.get('SENTRY_DSN');
  // TODO: eventually grab these dynamically
  Sentry.init({
    dsn,
    serverName: 'Open-Hockey-Api',
    release: 'open-hockey-api-0.0.1',
    integrations: [
      new RewriteFrames({
        root: __dirname,
      }),
    ],
  });

  const port = configService.get('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
