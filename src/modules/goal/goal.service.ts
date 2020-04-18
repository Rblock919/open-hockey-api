import { Injectable } from '@nestjs/common';

@Injectable()
export class GoalService {
  async getAllGoals(): Promise<any[]> {
    return null;
    // return this.GoalRepository.find();
  }

  async getGoalById(id: string): Promise<any> {
    return null;
    // return this.GoalRepository.findOne(id);
  }
}
