const express = require("express");

const app = express();
app.use(express.json());

// Collect receiver info
app.post("/receiver-info", (req, res) => {
  const { name, address, paymentDetails } = req.body;
  // Save receiver info to database (mocked here)
  res.json({ message: "Receiver information saved successfully." });
});

// Payment processing (mocked)
app.post("/process-payment", (req, res) => {
  const { amount } = req.body;
  res.json({ message: `Payment of $${amount} processed successfully.` });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Payment automation module running on ${PORT}`));
