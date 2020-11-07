import { Module } from '@nestjs/common';

import { DataSourcesService } from './dataSources.service';

@Module({
  imports: [],
  providers: [DataSourcesService],
  exports: [DataSourcesService],
})
export class SharedModule {}
