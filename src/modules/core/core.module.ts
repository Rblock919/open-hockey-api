import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { NHLStatsAPI } from '../../data-sources/stats-api.datasource';
import { NHLRecordsAPI } from '../../data-sources/records-api.datasource';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req, res }) => ({ req, res }),
      dataSources: () => {
        return {
          nhlStatsAPI: new NHLStatsAPI(),
          nhlRecordsAPI: new NHLRecordsAPI(),
        };
      },
      playground: true,
    }),
  ],
})
export class CoreModule {}
