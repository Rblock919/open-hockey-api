import { NHLTeam } from 'src/modules/team/interfaces/team.interface';
import { NHLVenue } from 'src/modules/venue/interfaces/venue.interface';

export interface NHLSchedule {
  dates: {
    date: string;
    totalItems: number;
    totalGames: number;
    totalMatches: number;
    games: NHLScheduledGame[];
    // events: any[]; // TODO: find more info about this type
    // matches: any[]; // TODO: find more info about this type
  }[];
}

export interface NHLScheduledGame {
  gamePk: string;
  link: string;
  gameType: string;
  season: string;
  gameDate: string; // TODO: test with Date
  status: {
    abstractGameState: string;
    codedGameState: string;
    detailedState: string;
    statusCode: string;
    startTimeTBD: boolean;
  };
  teams: {
    // TypeGraphQL makes this so verbose >:(
    // [K in keyof teamType]: {
    //   leagueRecord: {
    //     wins: number;
    //     losses: number;
    //     ot: number;
    //     type: string;
    //   };
    //   score: number;
    //   team: Pick<NHLTeam, 'id' | 'name' | 'link'>;
    //   venue: Pick<NHLVenue, 'name' | 'link'>;
    //   content: {
    //     link: string;
    //   };
    // };
    home: {
      leagueRecord: {
        wins: number;
        losses: number;
        ot: number;
        type: string;
      };
      score: number;
      team: Pick<NHLTeam, 'id' | 'name' | 'link'>;
      venue: Pick<NHLVenue, 'name' | 'link'>;
      content: {
        link: string;
      };
    };
    away: {
      leagueRecord: {
        wins: number;
        losses: number;
        ot: number;
        type: string;
      };
      score: number;
      team: Pick<NHLTeam, 'id' | 'name' | 'link'>;
      venue: Pick<NHLVenue, 'name' | 'link'>;
      content: {
        link: string;
      };
    };
  };
}

export type teamType = 'away' | 'home';
