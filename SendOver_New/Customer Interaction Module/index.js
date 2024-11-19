const express = require("express");
const { handleMessage } = require("./claudeService");
const { sendMessage } = require("../common/telegramUtils");

const app = express();
app.use(express.json());

// Telegram Webhook
app.post('/webhook', (req, res) => {
  console.log("Received request:", JSON.stringify(req.body, null, 2)); // Log incoming request
  const { message } = req.body;

  if (message) {
      console.log(`Message received: ${message.text}`); // Log message text
      // Handle message logic
      bot.sendMessage(message.chat.id, "Hello!");
  } else {
      console.log("No message found in the request.");
  }

  res.sendStatus(200);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Customer interaction module running on ${PORT}`));
