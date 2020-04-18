import { Injectable } from '@nestjs/common';

@Injectable()
export class SeasonService {
  async getAllSeasons(): Promise<any[]> {
    return null;
    // return this.SeasonRepository.find();
  }

  async getSeasonById(id: string): Promise<any> {
    return null;
    // return this.SeasonRepository.findOne(id);
  }
}
