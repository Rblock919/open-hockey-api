import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AssistService } from './assist.service';
import { AssistResolver } from './assist.resolver';
import { AssistEntity } from './models/entities/assist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssistEntity])],
  providers: [AssistService, AssistResolver],
})
export class AssistModule {}
