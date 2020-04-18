import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamService {
  async getAllTeams(): Promise<any[]> {
    return null;
    // return this.TeamRepository.find();
  }

  async getTeamById(id: string): Promise<any> {
    return null;
    // return this.TeamRepository.findOne(id);
  }
}
