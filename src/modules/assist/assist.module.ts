import { Module } from '@nestjs/common';

import { AssistService } from './assist.service';
import { AssistResolver } from './assist.resolver';

@Module({
  imports: [],
  providers: [AssistService, AssistResolver],
})
export class AssistModule {}
