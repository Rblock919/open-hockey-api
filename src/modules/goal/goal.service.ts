import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GoalEntity } from './models/entities/goal.entity';
import { CreateGoalInput } from './models/inputs/goal.input';

@Injectable()
export class GoalService {
  constructor(
    @InjectRepository(GoalEntity)
    private readonly GoalRepository: Repository<GoalEntity>
  ) {}

  async createGoal(data: CreateGoalInput): Promise<GoalEntity> {
    const goal = new GoalEntity();
    goal.name = data.name;

    await this.GoalRepository.save(goal);

    return goal;
  }

  async getAllGoals(): Promise<GoalEntity[]> {
    return this.GoalRepository.find();
  }

  async getGoalById(id: string): Promise<GoalEntity> {
    return this.GoalRepository.findOne(id);
  }
}
