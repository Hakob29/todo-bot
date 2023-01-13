import { Module } from '@nestjs/common';
import { TodobotController } from './todobot.controller';
import { TodobotService } from './todobot.service';

@Module({
  controllers: [TodobotController],
  providers: [TodobotService]
})
export class TodobotModule {}
