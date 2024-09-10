import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { dbConfig } from './config/db.config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    //Load enviroment variables globally
    ConfigModule.forRoot({ isGlobal: true }),
    //Database configuration 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: dbConfig
    }),
    UserModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
  }],
})
export class AppModule {}
