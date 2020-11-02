import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoggerService } from '@rblock919/nestjs-logger';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const lastItemIdx = context.getArgs().length - 1;
    const { fieldName, parentType } = context.getArgByIndex(lastItemIdx);

    this.logger.debug(`<-- Received: ${parentType}: ${fieldName}`);

    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.debug(`--> Responded: ${parentType}: ${fieldName}`)
        )
      );
  }
}
