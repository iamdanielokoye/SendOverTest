const express = require("express");
const { handleMessage } = require("./claudeService");
const { sendMessage } = require("../common/telegramUtils");

const app = express();
app.use(express.json());

// Telegram Webhook
app.post("/webhook", async (req, res) => {
  const message = req.body.message;

  if (message && message.text) {
    const chatId = message.chat.id;
    const userMessage = message.text;

    // Get AI response
    const response = await handleMessage(userMessage);

    // Send response back to Telegram
    await sendMessage(chatId, response);
  }

  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Customer interaction module running on ${PORT}`));
