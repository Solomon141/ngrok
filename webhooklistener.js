const TelegramBot = require("node-telegram-bot-api");

// Replace 'YOUR_BOT_TOKEN' with the actual token you obtained from BotFather
const bot = new TelegramBot("6408912371:AAHKl8BYFnPesJ92YwCzpPIp5EHJ7et_Wag", {
  polling: true,
});

// Listen for new members joining the channel
bot.on("channel_post", (msg) => {
  console.log("New member joined!");
});


// Log any errors
bot.on("polling_error", (error) => {
  console.error(error.code); // => 'EFATAL'
});

console.log("Bot is running...");
