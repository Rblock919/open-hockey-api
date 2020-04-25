import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as Sentry from '@sentry/node';

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
  Sentry.init({ dsn });

  const port = configService.get('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
