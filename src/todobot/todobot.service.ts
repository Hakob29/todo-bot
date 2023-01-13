import { Injectable } from "@nestjs/common";
import { InjectBot, Start, Update } from "nestjs-telegraf";
import { Context, Telegraf } from "telegraf";


@Update()
@Injectable()
export class TodobotService {

    constructor(
        @InjectBot() private readonly bot: Telegraf<Context>
    ) { }

    @Start()
    async startCommand(ctx: Context) {
        await ctx.reply("Hi friend!")
    }
}
