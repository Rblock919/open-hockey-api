/* eslint-disable max-classes-per-file */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  NHLSchedule,
  NHLScheduledGame,
} from '../interfaces/schedule.interface';

// TODO: look into seeing if some of these classes/object types can be defined in-line

@ObjectType()
export class ScheduleGameStatus {
  @Field()
  abstractGameState: string;

  @Field()
  codedGameState: string;

  @Field()
  detailedState: string;

  @Field()
  statusCode: string;

  @Field()
  startTimeTBD: boolean;
}

@ObjectType()
export class ScheduledGameTeamRecord {
  @Field(type => Int)
  wins: number;

  @Field(type => Int)
  losses: number;

  @Field(type => Int)
  ot: number;

  @Field()
  type: string;
}

@ObjectType()
export class ScheduledGameTeamTeamAttr {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  link: string;
}

@ObjectType()
export class ScheduledGameTeamVenueAttr {
  @Field()
  name: string;

  @Field()
  link: string;
}

@ObjectType()
export class ScheduledGameTeamContentAttr {
  @Field()
  link: string;
}

@ObjectType()
export class ScheduledGameTeam {
  @Field(type => ScheduledGameTeamRecord)
  leagueRecord: ScheduledGameTeamRecord;

  @Field(type => Int)
  score: number;

  @Field(type => ScheduledGameTeamTeamAttr)
  team: ScheduledGameTeamTeamAttr;

  @Field(type => ScheduledGameTeamVenueAttr)
  venue: ScheduledGameTeamVenueAttr;

  @Field(type => ScheduledGameTeamContentAttr)
  content: ScheduledGameTeamContentAttr;
}

@ObjectType()
export class ScheduledGameTeams {
  @Field(type => ScheduledGameTeam)
  home: ScheduledGameTeam;

  @Field(type => ScheduledGameTeam)
  away: ScheduledGameTeam;
}

@ObjectType()
export class ScheduledGame implements NHLScheduledGame {
  @Field()
  gamePk: string;

  @Field()
  link: string;

  @Field()
  gameType: string;

  @Field()
  season: string;

  @Field()
  gameDate: string;

  @Field(type => ScheduleGameStatus)
  status: ScheduleGameStatus;

  @Field(type => ScheduledGameTeams)
  teams: ScheduledGameTeams;
}

@ObjectType()
export class ScheduledDate {
  @Field()
  date: string;

  @Field(type => Int)
  totalItems: number;

  @Field(type => Int)
  totalGames: number;

  @Field(type => Int)
  totalMatches: number;

  @Field(type => [ScheduledGame])
  games: ScheduledGame[];
}

@ObjectType()
export class Schedule implements NHLSchedule {
  @Field(type => [ScheduledDate])
  dates: ScheduledDate[];
}
