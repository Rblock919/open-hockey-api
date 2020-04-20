import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as Sentry from '@sentry/node';

import { AppModule } from './app.module';
import { LogglyService } from './modules/logger/logger.service';
import { ApolloExceptionFilter } from './exception-filters/apollo-exception-filter';
import { BadRequestExceptionFilter } from './exception-filters/bad-request-exception.filter';
import { LogglyExceptionFilter } from './exception-filters/loggly-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  app.useLogger(new LogglyService(app.get(ConfigService)));

  // TODO: update cors policy
  app.enableCors();

  app.useGlobalFilters(
    new ApolloExceptionFilter(),
    new BadRequestExceptionFilter(),
    new LogglyExceptionFilter()
  );

  // TODO: uncomment security headers once tailored for gql dev purposes
  // AppHeaderSecurity(app);

  const dsn = app.get(ConfigService).get('SENTRY_DSN');
  Sentry.init({ dsn });

  const port = app.get(ConfigService).get('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
