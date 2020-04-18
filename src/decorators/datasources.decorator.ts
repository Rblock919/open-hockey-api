import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { DataSources as IDataSources } from '../data-sources/datasources.interface';

export const DataSources = createParamDecorator(
  (data: unknown, context: ExecutionContext): IDataSources => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().dataSources;
  }
);
