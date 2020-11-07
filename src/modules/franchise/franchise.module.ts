import { Module } from '@nestjs/common';

import { FranchiseService } from './franchise.service';
import { FranchiseResolver } from './franchise.resolver';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [FranchiseService, FranchiseResolver],
})
export class FranchiseModule {}
