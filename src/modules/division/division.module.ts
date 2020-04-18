import { Module } from '@nestjs/common';
import { DivisionService } from './division.service';
import { DivisionResolver } from './division.resolver';

@Module({
  providers: [DivisionService, DivisionResolver],
})
export class DivisionModule {}
