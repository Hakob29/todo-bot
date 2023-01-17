import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Hears, Help, InjectBot, On, Start, Update } from "nestjs-telegraf";
import { Context, Markup, Telegraf } from "telegraf";
import { Repository } from "typeorm";
import { Todo } from "./todo.entity";

@Update()
@Injectable()
export class TodobotService {
    constructor(
        @InjectBot() private readonly bot: Telegraf<Context>
    ) {
        this.bot.telegram.setMyCommands([
            { command: "/start", description: "Initial Greetings" },
            { command: '/info', description: "Bot Information" },
            { command: "/game", description: "Game Start..." }
        ])
    }


    @On("message")
    async message(ctx: Context) {
        let text = ctx.message["text"];
        const chatId = String(ctx.message.chat.id);
        if (text === "/start") {
            await ctx.sendSticker("https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp")
            await this.bot.telegram.sendMessage(chatId, "Hi!");
        }
        else if (text === "/info") {
            await ctx.sendSticker("https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/8.webp")
            await ctx.reply("Your name is " + ctx.message.chat["username"]);
        }
        else if (text === "/game") {
            await ctx.sendSticker("https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/9.webp")
            await this.bot.telegram.sendMessage(chatId, "Choose Number of 0 - 9", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "1", callback_data: "1" }, { text: "2", callback_data: "2" }, { text: "3", callback_data: "3" }],
                        [{ text: "4", callback_data: "4" }, { text: "5", callback_data: "5" }, { text: "6", callback_data: "6" }],
                        [{ text: "7", callback_data: "7" }, { text: "8", callback_data: "8" }, { text: "9", callback_data: "9" }],
                        [{ text: "0", callback_data: "0" }],

                    ]
                }
            });
        }
        else {
            await ctx.reply("I don't understand you!")
        }
    }

    @On("callback_query")
    async game(ctx: Context) {
        const chatId = await ctx.update["callback_query"].message.chat.id
        const data = await ctx.update["callback_query"].data;
        const number = Math.ceil((Math.random() * 9));

        if (number == data) {
            await ctx.sendSticker("https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/11.webp")
            await this.bot.telegram.sendMessage(chatId, "You wiiiiiiin!!!!!!!", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Try Again", callback_data: "/game" }]
                    ]
                }
            })
        }
        else if (number != data && data != "/game") {
            await ctx.sendSticker("https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/6.webp")
            await this.bot.telegram.sendMessage(chatId, "Noooo!, You choose " + data + ", Bot Choose " + number, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Try Again", callback_data: "/game" }]
                    ]
                }
            })
        }

        if (data == "/game") {
            await this.bot.telegram.sendMessage(chatId, "Choose Number of 0 - 9", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "1", callback_data: "1" }, { text: "2", callback_data: "2" }, { text: "3", callback_data: "3" }],
                        [{ text: "4", callback_data: "4" }, { text: "5", callback_data: "5" }, { text: "6", callback_data: "6" }],
                        [{ text: "7", callback_data: "7" }, { text: "8", callback_data: "8" }, { text: "9", callback_data: "9" }],
                        [{ text: "0", callback_data: "0" }],

                    ]
                }
            });
        }

    }

}


