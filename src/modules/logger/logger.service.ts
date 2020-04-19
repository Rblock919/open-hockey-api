import { LoggerService } from '@nestjs/common';

export class LogglyLogger implements LoggerService {
  log(message: string) {
    /* your implementation */
    console.log('new message: ', message);
  }

  error(message: string, trace: string) {
    /* your implementation */
    console.log('new message: ', message);
  }

  warn(message: string) {
    /* your implementation */
    console.log('new message: ', message);
  }

  debug(message: string) {
    /* your implementation */
    console.log('new message: ', message);
  }

  verbose(message: string) {
    /* your implementation */
    console.log('new message: ', message);
  }
}
