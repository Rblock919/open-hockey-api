import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { LoggerModule } from '@rblock919/nestjs-logger';

import { NHLStatsAPI } from '../../data-sources/stats-api.datasource';
import { NHLRecordsAPI } from '../../data-sources/records-api.datasource';
import { configureLogger } from '../../config/configureLogger';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(configureLogger()),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      introspection: true,
      playground: true, // TODO: pull from env variable
      // TODO: create interface for context
      context: ({ req, res }) => ({ req, res }),
      dataSources: () => {
        return {
          nhlStatsAPI: new NHLStatsAPI(),
          nhlRecordsAPI: new NHLRecordsAPI(),
        };
      },
      // TODO: implement formatGqlError w/ sentry integration
    }),
  ],
})
export class CoreModule {}
