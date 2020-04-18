import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {
  async getPlayers(): Promise<any[]> {
    return null;
    // return this.PlayerRepository.find();
  }

  async getPlayerById(id: string): Promise<any> {
    return null;
    // return this.PlayerRepository.findOne(id);
  }
}
