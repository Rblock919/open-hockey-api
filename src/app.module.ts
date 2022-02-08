import { Module } from '@nestjs/common';

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
import { ScheduleModule } from './modules/schedule/schedule.module';

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
    ScheduleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
