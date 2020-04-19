import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { ApolloExceptionFilter } from './exception-filters/apollo-exception-filter';
import { BadRequestExceptionFilter } from './exception-filters/bad-request-exception.filter';
import { TeamModule } from './modules/team/team.module';
import { SeasonModule } from './modules/season/season.module';
import { PlayerModule } from './modules/player/player.module';
import { GameModule } from './modules/game/game.module';
import { DivisionModule } from './modules/division/division.module';
import { VenueModule } from './modules/venue/venue.module';
import { ConferenceModule } from './modules/conference/conference.module';
import { NHLStatsAPI } from './data-sources/stats-api.datasource';
import { NHLRecordsAPI } from './data-sources/records-api.datasource';
import { FranchiseModule } from './modules/franchise/franchise.module';
import { ProspectModule } from './modules/prospect/prospect.module';
import { AwardModule } from './modules/award/award.module';
import { LoggerModule } from './modules/logger/logger.module';

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
    }),
    TeamModule,
    SeasonModule,
    PlayerModule,
    GameModule,
    DivisionModule,
    VenueModule,
    ConferenceModule,
    FranchiseModule,
    ProspectModule,
    AwardModule,
    LoggerModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ApolloExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
  ],
})
export class AppModule {}
