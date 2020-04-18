import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RosterEntity } from './models/entities/roster.entity';
import { CreateRosterInput } from './models/inputs/roster.input';

@Injectable()
export class RosterService {
  constructor(
    @InjectRepository(RosterEntity)
    private readonly RosterRepository: Repository<RosterEntity>
  ) {}

  async createRoster(data: CreateRosterInput): Promise<RosterEntity> {
    const roster = new RosterEntity();
    roster.name = data.name;

    await this.RosterRepository.save(roster);

    return roster;
  }

  async getAllRosters(): Promise<RosterEntity[]> {
    return this.RosterRepository.find();
  }

  async getRosterById(id: string): Promise<RosterEntity> {
    return this.RosterRepository.findOne(id);
  }
}
