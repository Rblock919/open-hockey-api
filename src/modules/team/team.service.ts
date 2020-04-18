import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TeamEntity } from './entities/team.entity';
import { CreateTeamInput } from './inputs/team.input';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly TeamRepository: Repository<TeamEntity>
  ) {}

  async createTeam(data: CreateTeamInput): Promise<TeamEntity> {
    const team = new TeamEntity();
    team.name = data.name;
    team.abbr = data.abbr;

    await this.TeamRepository.save(team);

    return team;
  }

  async getAllTeams(): Promise<TeamEntity[]> {
    return this.TeamRepository.find();
  }

  async getTeamById(id: string): Promise<TeamEntity> {
    return this.TeamRepository.findOne(id);
  }
}
