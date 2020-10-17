import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { LogglyExceptionFilter } from './exception-filters/loggly-exception.filter';
import { ApolloExceptionFilter } from './exception-filters/apollo-exception-filter';
import { BadRequestExceptionFilter } from './exception-filters/bad-request-exception.filter';
import { TeamModule } from './modules/team/team.module';
import { SeasonModule } from './modules/season/season.module';
import { PlayerModule } from './modules/player/player.module';
import { GameModule } from './modules/game/game.module';
import { DivisionModule } from './modules/division/division.module';
import { VenueModule } from './modules/venue/venue.module';
import { ConferenceModule } from './modules/conference/conference.module';
import { FranchiseModule } from './modules/franchise/franchise.module';
import { ProspectModule } from './modules/prospect/prospect.module';
import { AwardModule } from './modules/award/award.module';
import { CoreModule } from './modules/core/core.module';

@Module({
  imports: [
    CoreModule,
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
    {
      provide: APP_FILTER,
      useClass: LogglyExceptionFilter,
    },
  ],
})
export class AppModule {}
