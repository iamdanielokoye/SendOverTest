const express = require("express");

const app = express();
app.use(express.json());

app.post("/verify-address", (req, res) => {
  const { address } = req.body;
  // Mock address verification
  res.json({ verified: true, message: "Address verified successfully." });
});

app.post("/secure-delivery", (req, res) => {
  const { password } = req.body;
  res.json({ message: "Delivery approved with password protection." });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Final-mile delivery module running on ${PORT}`));
