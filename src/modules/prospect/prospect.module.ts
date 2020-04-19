import { Module } from '@nestjs/common';
import { ProspectService } from './prospect.service';
import { ProspectResolver } from './prospect.resolver';

@Module({
  providers: [ProspectService, ProspectResolver],
})
export class ProspectModule {}
