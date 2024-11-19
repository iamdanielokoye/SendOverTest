const express = require("express");

const app = express();
app.use(express.json());

app.post("/send-marketing", (req, res) => {
  const { email, campaign } = req.body;
  res.json({ message: `Marketing email sent to ${email} for campaign: ${campaign}` });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Marketing automation module running on ${PORT}`));
