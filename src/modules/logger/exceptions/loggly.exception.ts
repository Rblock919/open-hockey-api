import { HttpException } from '@nestjs/common';

export class LogglyException extends HttpException {
  constructor(message: string) {
    super(message, 503);
  }
}
