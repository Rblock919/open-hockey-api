import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { HockeyDataSources } from '../data-sources/datasources.interface';

export const DataSources = createParamDecorator(
  (data: unknown, context: ExecutionContext): HockeyDataSources => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().dataSources;
  }
);
