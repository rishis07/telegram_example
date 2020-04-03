const TelegramBot = require('node-telegram-bot-api');
const token = '';
const bot = new TelegramBot(token, { polling: true });

let user_id = ""

// Con esto le mandas un mensaje a un usuario
// bot.sendMessage(user_id, "Que hace puto")

bot.onText(/\/start/, (msg) => {
    let greet = "Hola! para hacer una orden por favor indicarme /hacer_orden"
    bot.sendMessage(msg.chat.id, greet)
});