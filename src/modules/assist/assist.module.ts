import { Module } from '@nestjs/common';
import { AssistService } from './assist.service';

@Module({
  providers: [AssistService],
})
export class AssistModule {}
