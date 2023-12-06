const { getAxiosInstance } = require("./axios");
const { errorHandler } = require("./helper");

const MY_TOKEN = process.env.TELE_BOT_TOKEN;
const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;
const axiosInstance = getAxiosInstance(BASE_URL);

function sendMessage(chatId, messageText) {
  return axiosInstance
    .get("sendMessage", {
      chat_id: chatId,
      text: messageText,
    })
    .catch((ex) => {
      errorHandler(ex, "sendMessage", "axios");
    });
}

async function handleMessage(messageObj) {
  const messageText = messageObj.text || "";
  if (!messageText) {
    errorHandler("No message text", "handleMessage");
    return "";
  }

  try {
    const chatId = messageObj.chat.id;
    if(messageText.charAt(0) === "/") {
        const command = messageText.substr(1);
        switch(command) {
            case "start":
                return sendMessage(
                    chatId, "Hi I'm a bot. i can help you to find out what are all the requirements to be part of amigos."
                );
            default:
                return sendMessage(chatId, "I don't know what you mean");
        }
    }else{
        return sendMessage(chatId, messageText);
    }
  } catch (error) {
    return errorHandler(error, "handleMessage");
  }
}

module.exports = { sendMessage, handleMessage  };
