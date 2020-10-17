/* eslint-disable no-console */
import { ConfigService } from '@nestjs/config';
import { Logger, Injectable, Scope } from '@nestjs/common';
import * as loggly from 'node-loggly-bulk';

import { LogglyException } from './exceptions/loggly.exception';

interface LoggingClient {
  log(obj: any, cb: Function): any;
}

enum LogLevel {
  INFO = 'info',
  ERROR = 'error',
  WARN = 'warn',
  DEBUG = 'debug',
  VERBOSE = 'verbose',
}

// TODO: test using the winston way again with version 2.4.0 for winston

/* Links:
  https://www.loggly.com/blog/logging-transpiled-environments-using-newer-javascript-language-constructs/
  https://github.com/loggly/winston-loggly-bulk/issues/32
*/

@Injectable({ scope: Scope.TRANSIENT })
export class LogglyService extends Logger {
  constructor(private configService: ConfigService) {
    super();
  }

  private client: LoggingClient = loggly.createClient({
    token: this.configService.get<string>('LOGGLY_TOKEN'),
    subdomain: this.configService.get<string>('LOGGLY_SUBDOMAIN'),
    json: true,
  });

  private async submitLog(level: LogLevel, data: string): Promise<boolean> {
    const env = this.configService.get<string>('NODE_ENV') === 'production';
    if (env === true) {
      try {
        return await this.logToLoggly(level, data);
      } catch (error) {
        throw new LogglyException(`Loggly Error: ${error}`);
      }
    }
    return this.logToConsole(level, data);
  }

  private async logToLoggly(level: LogLevel, data: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const logObj = { level, data };
      // TODO: use async/await + try-catch instead of callback
      this.client.log(logObj, (err, result) => {
        if (err) {
          return reject(err);
        }
        if (result.response === 'ok') {
          return resolve(true);
        }
        return reject(
          new Error(
            `Response Code is not === 'ok'\nResponse: ${result.response}`
          )
        );
      });
    });
  }

  private logToConsole(level: LogLevel, data: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      console.log('------- LOG START --------');
      switch (level) {
        case LogLevel.INFO: {
          console.log({ Level: level });
          console.log({ data });
          break;
        }
        case LogLevel.DEBUG: {
          console.log({ Level: level });
          console.debug({ data });
          break;
        }
        case LogLevel.WARN: {
          console.log({ Level: level });
          console.warn({ data });
          break;
        }
        case LogLevel.ERROR: {
          console.log({ Level: level });
          console.error({ data });
          break;
        }
        default: {
          console.log('Default:');
          console.log({ data });
          break;
        }
      }
      console.log('-------- LOG END ---------');
      return resolve(true);
    });
  }

  // TODO: accept objects instead of strings?

  async log(message: string): Promise<boolean> {
    return this.submitLog(LogLevel.INFO, message);
  }

  async error(message: string, trace: string): Promise<boolean> {
    return this.submitLog(LogLevel.ERROR, message);
  }

  async warn(message: string): Promise<boolean> {
    return this.submitLog(LogLevel.WARN, message);
  }

  async debug(message: string): Promise<boolean> {
    return this.submitLog(LogLevel.DEBUG, message);
  }

  async verbose(message: string): Promise<boolean> {
    return this.submitLog(LogLevel.VERBOSE, message);
  }
}
