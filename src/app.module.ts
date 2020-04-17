import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './modules/team/team.module';
import { SeasonModule } from './modules/season/season.module';
import { PlayerModule } from './modules/player/player.module';
import { GoalModule } from './modules/goal/goal.module';
import { GameModule } from './modules/game/game.module';
import { AssistModule } from './modules/assist/assist.module';
import { RosterModule } from './modules/roster/roster.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    TeamModule,
    SeasonModule,
    PlayerModule,
    GoalModule,
    GameModule,
    AssistModule,
    RosterModule,
    AuthModule.forRoot(process.env.TOKEN_SECRET),
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
