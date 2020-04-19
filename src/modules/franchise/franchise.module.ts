import { Module } from '@nestjs/common';

import { FranchiseService } from './franchise.service';
import { FranchiseResolver } from './franchise.resolver';

@Module({
  providers: [FranchiseService, FranchiseResolver],
})
export class FranchiseModule {}
