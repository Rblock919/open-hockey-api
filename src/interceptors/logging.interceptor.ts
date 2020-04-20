import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { LogglyService } from '../modules/logger/logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: LogglyService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.log('Request Received!');

    return next.handle();
  }
}
