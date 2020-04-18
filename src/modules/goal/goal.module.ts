import { Module } from '@nestjs/common';

import { GoalService } from './goal.service';
import { GoalResolver } from './goal.resolver';

@Module({
  imports: [],
  providers: [GoalService, GoalResolver],
})
export class GoalModule {}
