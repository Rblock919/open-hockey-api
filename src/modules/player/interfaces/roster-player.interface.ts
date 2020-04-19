import { NHLPrimaryPosition } from './primary-position.interface';
import { NHLPlayer } from './player.interfaces';

export interface NHLRosterPlayer {
  person: Pick<NHLPlayer, 'id' | 'fullName' | 'link'>;
  jerseyNumber: string;
  position: NHLPrimaryPosition;
}
