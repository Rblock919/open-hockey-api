import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { ApolloExceptionFilter } from './exception-filters/apollo-exception-filter';
import { BadRequestExceptionFilter } from './exception-filters/bad-request-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: update cors policy
  app.enableCors();

  app.useGlobalFilters(
    new ApolloExceptionFilter(),
    new BadRequestExceptionFilter()
  );

  // TODO: uncomment security headers once tailored for gql dev purposes
  // AppHeaderSecurity(app);

  await app.listen(app.get(ConfigService).get('PORT'));
}
bootstrap();
