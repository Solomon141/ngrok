const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the actual token you obtained from BotFather
const bot = new TelegramBot('6408912371:AAHKl8BYFnPesJ92YwCzpPIp5EHJ7et_Wag', { polling: true });

// Listen for new members joining the channel
bot.on('channel_post', (msg) => {
//   const chatId = msg.chat.id;
//   const newMembers = msg.new_chat_members;

//   newMembers.forEach((member) => {
//     const memberId = member.id;
//     const memberUsername = member.username;
//     const memberFirstName = member.first_name;

//     // Perform actions when a new member joins
//     console.log(`New member joined! ID: ${memberId}, Username: ${memberUsername}, First Name: ${memberFirstName}`);
    
//     // You can send a welcome message or perform other actions here
//     bot.sendMessage(chatId, `Welcome, ${memberFirstName} (@${memberUsername})!`);
//   });

console.log("New member joined!");

});

// Log any errors
bot.on('polling_error', (error) => {
  console.error(error.code);  // => 'EFATAL'
});

console.log('Bot is running...');
