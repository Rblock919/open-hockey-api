import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssistEntity } from './models/entities/assist.entity';
import { CreateAssistInput } from './models/inputs/assist.input';

@Injectable()
export class AssistService {
  constructor(
    @InjectRepository(AssistEntity)
    private readonly AssistRepository: Repository<AssistEntity>
  ) {}

  async createAssist(data: CreateAssistInput): Promise<AssistEntity> {
    const assist = new AssistEntity();
    assist.name = data.name;

    await this.AssistRepository.save(assist);

    return assist;
  }

  async getAllAssists(): Promise<AssistEntity[]> {
    return this.AssistRepository.find();
  }

  async getAssistById(id: string): Promise<AssistEntity> {
    return this.AssistRepository.findOne(id);
  }
}
