import { Module, DynamicModule } from '@nestjs/common';

import { AuthService } from './auth.service';

@Module({})
export class AuthModule {
  static forRoot(secret: string): DynamicModule {
    return {
      module: AuthModule,
      providers: [AuthService],
    };
  }
}
