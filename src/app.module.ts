import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { NHLStatsAPI } from './data-sources/stats-api.datasource';
import { ApolloExceptionFilter } from './exception-filters/apollo-exception-filter';
import { BadRequestExceptionFilter } from './exception-filters/bad-request-exception.filter';
import { TeamModule } from './modules/team/team.module';
import { SeasonModule } from './modules/season/season.module';
import { PlayerModule } from './modules/player/player.module';
import { GoalModule } from './modules/goal/goal.module';
import { GameModule } from './modules/game/game.module';
import { AssistModule } from './modules/assist/assist.module';
import { RosterModule } from './modules/roster/roster.module';
import { DivisionModule } from './modules/division/division.module';
import { VenueModule } from './modules/venue/venue.module';
import { ConferenceModule } from './modules/conference/conference.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req, res }) => ({ req, res }),
      dataSources: () => {
        return {
          nhlStatsAPI: new NHLStatsAPI(),
        };
      },
    }),
    TeamModule,
    SeasonModule,
    PlayerModule,
    GoalModule,
    GameModule,
    AssistModule,
    RosterModule,
    DivisionModule,
    VenueModule,
    ConferenceModule,
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
