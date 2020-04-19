import { Module } from '@nestjs/common';

import { LogglyService } from './logger.service';

@Module({
  providers: [LogglyService],
  exports: [LogglyService],
})
export class LoggerModule {}
