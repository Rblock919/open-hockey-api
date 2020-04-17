import { Module } from '@nestjs/common';
import { GoalService } from './goal.service';

@Module({
  providers: [GoalService]
})
export class GoalModule {}
