import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { TeamModule } from './modules/team/team.module';
import { SeasonModule } from './modules/season/season.module';
import { PlayerModule } from './modules/player/player.module';
import { GoalModule } from './modules/goal/goal.module';
import { GameModule } from './modules/game/game.module';
import { AssistModule } from './modules/assist/assist.module';
import { RosterModule } from './modules/roster/roster.module';
import { NHLStatsAPI } from './data-sources/stats-api.datasource';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
