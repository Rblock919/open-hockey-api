import { Module } from '@nestjs/common';

import { DivisionService } from './division.service';
import { DivisionResolver } from './division.resolver';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [DivisionService, DivisionResolver],
})
export class DivisionModule {}
