import { Module } from '@nestjs/common';

import { ProspectService } from './prospect.service';
import { ProspectResolver } from './prospect.resolver';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [ProspectService, ProspectResolver],
})
export class ProspectModule {}
