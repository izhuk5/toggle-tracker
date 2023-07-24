import { BadRequestException, Module, ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { APP_PIPE } from '@nestjs/core';
import { ErrorCodes } from './shared/errors/error-codes.enum';
import { ApiErrorDto } from './shared/errors/api-error.dto';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/toggle-tracker'),
    UsersModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        exceptionFactory(errors) {
          return new BadRequestException(
            new ApiErrorDto({
              code: ErrorCodes.VALIDATION_ERROR,
              message: 'Validation Error',
              details: errors,
            }),
          );
        },
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
