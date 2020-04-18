import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';

import { Goal } from './models/dto/goal.dto';
import { GoalService } from './goal.service';
import { CreateGoalInput } from './models/inputs/goal.input';
import { GoalEntity } from './models/entities/goal.entity';

@Resolver(of => Goal)
export class GoalResolver {
  constructor(private goalService: GoalService) {}

  @Query(returns => [Goal], { name: 'goals' })
  async getAllGoals(): Promise<GoalEntity[]> {
    return this.goalService.getAllGoals();
  }

  @Query(returns => Goal, { name: 'goal' })
  async getGoalById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<GoalEntity> {
    return this.goalService.getGoalById(id);
  }

  @Mutation(returns => Goal, { name: 'createGoal' })
  async submitGoal(@Args('data') data: CreateGoalInput): Promise<GoalEntity> {
    return this.goalService.createGoal(data);
  }
}
