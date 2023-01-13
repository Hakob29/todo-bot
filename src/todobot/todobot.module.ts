import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodobotController } from './todobot.controller';
import { TodobotService } from './todobot.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo])
  ],
  controllers: [TodobotController],
  providers: [TodobotService]
})
export class TodobotModule { }
