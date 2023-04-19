import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { RedisCache } from 'apollo-server-cache-redis';
import depthLimit from 'graphql-depth-limit';

import { LoggerModule } from '@rblock919/nestjs-logger';

import { NHLStatsAPI } from '../../data-sources/stats-api.datasource';
import { NHLRecordsAPI } from '../../data-sources/records-api.datasource';
import { configureLogger } from '../../config/configureLogger';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(configureLogger()),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      introspection: true,
      tracing: process.env.ENVIRONMENT !== 'production',
      playground: process.env.ENVIRONMENT !== 'production',
      // TODO: create interface for context
      context: ({ req, res }) => ({ req, res }),
      dataSources: () => {
        return {
          nhlStatsAPI: new NHLStatsAPI(),
          nhlRecordsAPI: new NHLRecordsAPI(),
        };
      },
      cache: new RedisCache({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
        name: 'open-hockey-api',
      }),
      validationRules: [depthLimit(3)],
      // TODO: implement formatGqlError w/ sentry integration
    }),
  ],
})
export class CoreModule {}
