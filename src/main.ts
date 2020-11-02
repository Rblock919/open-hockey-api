import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';

import { LoggerService } from '@rblock919/nestjs-logger';

import { AppModule } from './app.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

const APP_NAME = process.env.npm_package_name as string;
const APP_VERSION = process.env.npm_package_version as string;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const loggerService = await app.resolve(LoggerService);
  // const loggerService = new LoggerService({
  //   logLevels: configService.get('logger.logLevels'),
  //   logglyConfiguration: {
  //     logglySubdomain: configService.get('logger.logglySubdomain') as string,
  //     logglyToken: configService.get('logger.logglyToken') as string,
  //     logglyTags: configService.get('logger.logglyTags') as string[],
  //   },
  // });

  app.useLogger(loggerService);

  // TODO: update cors policy (remove?)
  app.enableCors();

  app.useGlobalInterceptors(new LoggingInterceptor(loggerService));

  // TODO: uncomment security headers once tailored for gql dev purposes
  // AppHeaderSecurity(app);

  const dsn = configService.get('SENTRY_DSN');
  Sentry.init({
    dsn,
    serverName: APP_NAME,
    release: `${APP_NAME}-${APP_VERSION}`,
    integrations: [
      new RewriteFrames({
        root: __dirname,
      }),
    ],
  });

  const port = configService.get('PORT') || 3000;
  await app.listen(port);

  loggerService.log(`${APP_NAME} version ${APP_VERSION} running on ${port}`);
}

bootstrap().catch(error => {
  // eslint-disable-next-line no-console
  console.error(
    `Failed to bootstrap ${APP_NAME}/root level error: ${error.stack}`
  );
  process.exit(1);
});
