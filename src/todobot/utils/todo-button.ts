import { Markup } from "telegraf";

export function actionButton() {
    return Markup.keyboard([
        Markup.button.callback("📝Todo List", "List"),
        Markup.button.callback("✏️Edit", "Edit"),
        Markup.button.callback("❌Delete", "Delete")
    ],
        {
            columns: 3
        }
    )
}