import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelegrafModule } from 'nestjs-telegraf';
import { OrmConfig } from 'orm-config';
import { TodobotModule } from './todobot/todobot.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(OrmConfig.options),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_BOT_KEY,
    }),
    TodobotModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
