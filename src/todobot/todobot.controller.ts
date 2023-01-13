import { Body, Controller, Post } from '@nestjs/common';
import { Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { CreateTodoDto } from './dto/todo-create.dto';
import { TodobotService } from './todobot.service';

@Controller('todobot')
export class TodobotController {
    constructor(
        private readonly todoBotService: TodobotService
    ) { }


    @Post("create")
    async createTodo(@Body() dto: CreateTodoDto) {
        return await this.todoBotService.createTodo(dto);
    }

}
