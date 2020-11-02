import { LoggerServiceOptions } from '@rblock919/nestjs-logger';

enum LogLevels {
  'LOG' = 'log',
  'VERBOSE' = 'verbose',
  'DEBUG' = 'debug',
  'ERROR' = 'error',
  'WARN' = 'warn',
}

export const configureLogger = (): LoggerServiceOptions => {
  const { logLevels, logglySubdomain, logglyToken, logglyTags } = {
    logLevels: [
      LogLevels.DEBUG,
      LogLevels.ERROR,
      LogLevels.LOG,
      LogLevels.VERBOSE,
      LogLevels.WARN,
    ],
    logglySubdomain: process.env.LOGGLY_SUBDOMAIN as string,
    logglyToken: process.env.LOGGLY_TOKEN as string,
    logglyTags: ['development', 'open-hockey-api'],
  };

  return {
    logLevels,
    logglyConfiguration: {
      logglySubdomain,
      logglyToken,
      logglyTags,
    },
  };
};
