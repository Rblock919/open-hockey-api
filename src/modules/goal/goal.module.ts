import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GoalService } from './goal.service';
import { GoalResolver } from './goal.resolver';
import { GoalEntity } from './models/entities/goal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoalEntity])],
  providers: [GoalService, GoalResolver],
})
export class GoalModule {}
