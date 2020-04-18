import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Goal } from './models/dto/goal.dto';
import { GoalService } from './goal.service';

@Resolver(of => Goal)
export class GoalResolver {
  constructor(private goalService: GoalService) {}

  @Query(returns => [Goal], { name: 'goals' })
  async getAllGoals(): Promise<any[]> {
    return this.goalService.getAllGoals();
  }

  @Query(returns => Goal, { name: 'goal' })
  async getGoalById(@Args('id', { type: () => ID }) id: string): Promise<any> {
    return this.goalService.getGoalById(id);
  }
}
