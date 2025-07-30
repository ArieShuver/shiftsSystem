import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShiftsModule } from './shifts/shifts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './Middleware/logger.middleware';

@Module({
  imports: [
    ShiftsModule,
    UsersModule,
    AuthModule,
    AssignmentsModule,
    ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
