import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Hears, InjectBot, Start, Update } from "nestjs-telegraf";
import { Context, Telegraf } from "telegraf";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dto/todo-create.dto";
import { Todo } from "./todo.entity";
import { actionButton } from "./utils/todo-button";


@Update()
@Injectable()
export class TodobotService {

    constructor(
        @InjectRepository(Todo) private readonly todoRepo: Repository<Todo>,
        @InjectBot() private readonly bot: Telegraf<Context>
    ) { }


    async createTodo(dto: CreateTodoDto) {
        const todoList = await this.todoRepo.create(dto);
        return await this.todoRepo.save(todoList);
    }

    @Start()
    async startCommand(ctx: Context) {
        await ctx.reply("Hi friend!");
        await ctx.reply("What you want?", actionButton());
    }

    @Hears("📝Todo List")
    async getAll(ctx: Context) {
        const list = await this.todoRepo.find();
        await ctx.reply(`${list.map(
            todo => (todo.isCompleted ? "✅" : "❌") + " " + todo.name + '\n\n'
        )
            .join("")
            }`)
    }
}
