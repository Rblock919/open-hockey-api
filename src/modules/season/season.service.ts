import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeasonEntity } from './models/entities/season.entity';
import { CreateSeasonInput } from './models/inputs/season.input';

@Injectable()
export class SeasonService {
  constructor(
    @InjectRepository(SeasonEntity)
    private readonly SeasonRepository: Repository<SeasonEntity>
  ) {}

  async createSeason(data: CreateSeasonInput): Promise<SeasonEntity> {
    const season = new SeasonEntity();
    season.name = data.name;

    await this.SeasonRepository.save(season);

    return season;
  }

  async getAllSeasons(): Promise<SeasonEntity[]> {
    return this.SeasonRepository.find();
  }

  async getSeasonById(id: string): Promise<SeasonEntity> {
    return this.SeasonRepository.findOne(id);
  }
}
