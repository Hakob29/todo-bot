import { Body, Controller, Post } from '@nestjs/common';
import { Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { TodobotService } from './todobot.service';

@Controller('todobot')
export class TodobotController {
    constructor(
        private readonly todoBotService: TodobotService
    ) { }



}
