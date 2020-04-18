import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  async getAllGames(): Promise<any[]> {
    return null;
    // return this.GameRepository.find();
  }

  async getGameById(id: string): Promise<any> {
    return null;
    // return this.GameRepository.findOne(id);
  }
}
